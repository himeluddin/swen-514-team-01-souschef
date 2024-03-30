var bucketRegion = "us-east-1";
const accessKeyId = "accessKeyId"
const secretAccessKey = "secretAccessKey"

const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: bucketRegion,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    },
    signatureVersion: 'v4'
});

export async function generateURL(bucketName, keyName){

    const params = ({
        Bucket:bucketName,
        Key:keyName,
        Expires: 60
    })

    return await s3.getSignedUrlPromise('putObject', params)
}