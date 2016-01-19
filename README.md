# AWS S3 node.js demo

## Configuire AWS

In AWS [IAM console](https://console.aws.amazon.com/iam), choose Users->Create New Users.

Download/Copy the crendential information.

After user created, select the user and choose tab Permissions->Attach Policy, select AmazonS3FullAccess.

Create a credential file ~/.aws/credential with the format described in [Configuring the SDK in Node.js](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)

## Run

Clone the project, do 
```
npm install
npm start
```

## Learn in depth

[SDK document](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
