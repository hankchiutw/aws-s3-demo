'use strict';

const AWS = require('aws-sdk');

let s3 = new AWS.S3();

s3.createBucket({Bucket: 'api-bucket-01'}, function(err, data){
    if(err) console.log('createBucket err:', err);
    else console.log('createBucket data:', data);

    const params = { Bucket: 'api-bucket-01', Key: 'file-01', Body: 'Hello'};
    s3.putObject(params, function(err, data){
        if(err) console.log('putObject err:', err);
        else console.log('putObject data:', data);
    });
});
