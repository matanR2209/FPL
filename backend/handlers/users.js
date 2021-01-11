// const ResponseFactory = require("../types/shared/ResponseFactory");

const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const AWS = require('aws-sdk');
const app = express();


const CONFIG_USERS_TABLE = process.env.CONFIG_USERS_TABLE;
const CONFIG_USERS_DYNAMODB_ENDPOINT = process.env.CONFIG_DYNAMODB_ENDPOINT;
const IS_OFFLINE = process.env.IS_OFFLINE;

let dynamoDb;

if (IS_OFFLINE === 'true') {

    dynamoDb = new AWS.DynamoDB.DocumentClient({
        region: 'localhost',
        endpoint: CONFIG_USERS_DYNAMODB_ENDPOINT,
    });

} else {
    dynamoDb = new AWS.DynamoDB.DocumentClient();
}

app.use(bodyParser.json({ strict: false, limit: '10mb' }));

app.get('/users', async function(req, res) {

    const dbParams = {
        TableName: CONFIG_USERS_TABLE,
    };

    let result = await dynamoDb.scan(dbParams).promise();
    res.json({users: result.Items});
});

app.post('/users', async function(req, res) {
    const { userId } = req.body;

    const dbParams = {
        TableName: CONFIG_USERS_TABLE,
        Item: {
            userId: userId,
            currentTeam: generateRandomTeam(),
            currentWishlist: generateRandomTeam(),
        },
    };

    try {
        await dynamoDb.put(dbParams).promise();
        res.json({status: '200'});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'error writing user'});
    }
});

app.get('/user', async function(req, res) {
    const { userId } = req.query;
    const dbParams = {
        TableName: CONFIG_USERS_TABLE,
        FilterExpression : 'userId = :user_id',
        ExpressionAttributeValues : {':user_id' : userId}
    };
    const result = await dynamoDb.scan(dbParams).promise();
    if(result.Items) {
     res.json({data: result.Items[0]})
    } else {
        res.json("No items")
    }
});

const generateRandomTeam = () => {
    return Array.from({length: 15}, () => Math.floor(Math.random() * 100));
}

module.exports.handler = serverless(app);