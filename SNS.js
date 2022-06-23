/*global res*/
'use strict';
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
const REGION = "us-east-1";
const snsClient = new SNSClient({ region: REGION });

exports.publish = async (event) => {
    try {
        var params = { TopicArn: "arn:aws:sns:us-east-1:350404484354:MyTopic", Message: JSON.stringify(event) };
        var data = await snsClient.send(new PublishCommand(params));
        var response = {
            "statusCode": 200,
            "body": JSON.stringify(data)
        };
        return response;
    } catch (err) {
        console.log("Error", err.stack);
    }
};
// Message: JSON.stringify({ to: "mmed0207@gmail.com", content: "Successfully published" })
// Message: event.Body.message
