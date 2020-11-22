const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'})

export const updateCurrentTeam = async (event) => {
    const params = {
        TableName: "FPL-assitance",
        Key: {
            "UserId": "event.userId"
        },
        UpdateExpression: `set CurrentTeam = :updateValue`,
        ExpressionAttributeValues: {
            ":updateValue": event.team
        },
        ReturnValues:"UPDATED_NEW"
    };
    const result = await asyncDocClientUpdate(params);
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 200,
            data: result,
        }, null, 2),
    };
}

const asyncDocClientUpdate = async function (params) {
    try {
        return docClient.update(params).promise();
    }
    catch (err) {
        console.log(err)
        return err;
    }
};
