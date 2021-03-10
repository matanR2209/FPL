// const ResponseFactory = require("../types/shared/ResponseFactory");

const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require('express');
const AWS = require('aws-sdk');
const app = express();

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

app.get('/playerTrending', async function(req, res) {
    const { playerId } = req.query;
    const dbParams = {
        TableName: CONFIG_TRENDING_TABLE,
        FilterExpression : 'playerId = :player_id',
        ExpressionAttributeValues : {':player_id' : playerId}
    };
    return getPlayerTrending();
    const result = await dynamoDb.scan(dbParams).promise();
    if(result.Items) {
        res.json({data: result.Items[0]})
    } else {
        res.json("No items")
    }
});

app.get('/teamTrending', async function(req, res) {
    const { teamId } = req.query;
    console.log(`Get trending data for team: ${teamId}`);
    return true;

    const dbParams = {
        TableName: CONFIG_TRENDING_TABLE,
        FilterExpression : 'teamId = :team_id',
        ExpressionAttributeValues : {':team_id' : teamId}
    };
    return [getPlayerTrending(), getPlayerTrending(), getPlayerTrending(), getPlayerTrending(), getPlayerTrending(), getPlayerTrending(), getPlayerTrending(), getPlayerTrending()]
    const result = await dynamoDb.scan(dbParams).promise();
    if(result.Items) {
        res.json({data: result.Items})
    } else {
        res.json("No items")
    }
});

const getPlayerTrending = () => {
    return {
        gwHistoryStats: [
            {
                gwNumber: 1,
                totalOwners: 10000,
                transferIn: 10000,
                transferOut: 0
            },
            {
                gwNumber: 2,
                totalOwners: 11000,
                transferIn: 2000,
                transferOut: 1000
            },
            {
                gwNumber: 3,
                totalOwners: 15500,
                transferIn: 5000,
                transferOut: 500
            },
            {
                gwNumber: 4,
                totalOwners: 16000,
                transferIn: 2000,
                transferOut: 1500
            },
            {
                gwNumber: 5,
                totalOwners: 12000,
                transferIn: 1000,
                transferOut: 5000
            },
            {
                gwNumber: 6,
                totalOwners: 12000,
                transferIn: 1000,
                transferOut: 5000
            },
            {
                gwNumber: 7,
                totalOwners: 21000,
                transferIn: 10000,
                transferOut: 1000
            },
            {
                gwNumber: 8,
                totalOwners: 20000,
                transferIn: 2000,
                transferOut: 3000
            },
            {
                gwNumber: 9,
                totalOwners: 17000,
                transferIn: 3000,
                transferOut: 6000
            },
            {
                gwNumber: 10,
                totalOwners: 15000,
                transferIn: 3000,
                transferOut: 5000
            }
        ],
        currentGwStats: {
            totalOwners: 15500,
            transferIn: 1000,
            transferOut: 500,
            onOpeningOwners: 15000
        },
        dailyStats: {
            onDayStartOwners: 15500,
            currentOwners: 17500,
            highest: 19000,
            lowest: 14000
        }
    }
}

module.exports.handler = serverless(app);