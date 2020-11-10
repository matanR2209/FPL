const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-2'})

export const updateCurrentTeam = async (request) => {
    const body = (JSON.parse(`${request.body}`));
    const params = {
        TableName: "FPL-assitance",
        Key: {
            "UserId": body.userId
        },
        UpdateExpression: `set CurrentTeam = :updateValue`,
        ExpressionAttributeValues: {
            ":updateValue": body.team,
        }
    };
    const result = await updateTeam(params);
    return {
        statusCode: 200,
        body: JSON.stringify({
            status: 200,
            data: result,
        }, null, 2),
    };
}



// return docClient.update(params, (err: AWSError, data: UpdateItemOutput) => {
//     if (err) {
//         console.log(err);
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 message: "ERROR",
//             }, null, 2),
//         };
//     }
//     else {
//         console.log(data)
//         return {
//             statusCode: 200,
//             body: JSON.stringify({
//                 message: "ERROR",
//                 data
//             }, null, 2),
//         };
//     }
// });


const updateTeam = async function (params) {
    try {
        let data = await docClient.update(params).promise()
        console.log("updateTeam");
        return data
    }
    catch (err) {
        console.log(err)
    }
};
