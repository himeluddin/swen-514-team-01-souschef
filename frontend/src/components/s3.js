var bucketRegion = "us-east-1";
const accessKeyId = "login"
const secretAccessKey = "password"

const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: bucketRegion,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    },
    signatureVersion: 'v4'
});

export async function getContentWithPrefix(bucketName, prefix) {
    const params = {
        Bucket: bucketName,
        Prefix: prefix // Specify the prefix to filter by
    };

    try {
        const data = await s3.listObjectsV2(params).promise();
        return data.Contents; // Return an array of objects that match the prefix
    } catch (error) {
        console.error('Error getting content from S3:', error);
        throw error;
    }
}

// export function listObjs(params) {
//     s3.listObjectsV2(params, (err, data) => {
//         if (err) {
//             console.error("Error:", err);
//         } else {
//             // For each object in the response
//             data.Contents.forEach((object) => {
//                 const objectKey = object.Key;
//
//                 // Define parameters for GetObjectTagging operation
//                 const taggingParams = {
//                     Bucket: 'post-souschef',
//                     Key: 'Label'
//                 };
//
//                 // Call GetObjectTagging to get tags associated with the object
//                 s3.getObjectTagging(taggingParams, (taggingErr, taggingData) => {
//                     if (taggingErr) {
//                         console.error("Error getting tags for object", objectKey, ":", taggingErr);
//                     } else {
//                         const tags = taggingData.TagSet;
//                         console.log("Tags for object", objectKey, ":", tags);
//                         return tags;
//                     }
//                 });
//             });
//         }
//     });
//
// }


export async function generateURL(bucketName, keyName){

    const params = ({
        Bucket:bucketName,
        Key:keyName,
        Expires: 60
    })

    return await s3.getSignedUrlPromise('putObject', params)
}
