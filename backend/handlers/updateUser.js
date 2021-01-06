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

app.post('/updateCurrentTeam', async function(req, res) {
    try {
    console.log(req.body);
    const params = req.body;
        const dbParams = {
            TableName: CONFIG_USERS_TABLE,
            Item: {
                userId: params.userId,
                currentTeam: params.currentTeam
            },
        };

        params.currentTeam.forEach((player) => {
            
        })

        await dynamoDb.put(dbParams).promise();
        res.json({status: '200'});
    } catch (error) {
        console.log(error);
        res.status(400).json({error: 'error writing user'});
    }
});

module.exports.handler = serverless(app);