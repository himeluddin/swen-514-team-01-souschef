var bucketRegion = "us-east-1";
const accessKeyId = "AKIA5FTZDMHU4AIXE3E5"
const secretAccessKey = "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"

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

export async function getIngredients(bucketName, prefix) {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };

    const data = await s3.listObjectsV2(params).promise();
    //console.log('Object retrieved successfully:');

    const ingredientsDict = {};

    for (const object of data.Contents) {
        const objectParams = {
            Bucket: bucketName,
            Key: object.Key
        };

        const tagData = await s3.getObjectTagging(objectParams).promise();
        const tagLabel = tagData.TagSet[0].Value;

        ingredientsDict[object.Key] = { label: tagLabel };
    }

    console.log("length of ingred dict s3: " + Object.keys(ingredientsDict).length);

    //console.log("SessionKey from S3 function: " + sessionStorage.getItem("sessionKey"));
    return ingredientsDict;
}