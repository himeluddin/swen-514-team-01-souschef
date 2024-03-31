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

export async function generateURL(bucketName, keyName){

    const params = ({
        Bucket:bucketName,
        Key:keyName,
        Expires: 60
    })

    return await s3.getSignedUrlPromise('putObject', params)
}


// export async function getIngredients(bucketName, prefix){
//     const params = ({
//         Bucket: bucketName, 
//         Prefix: prefix
//     })

//     var ingredientsArrayList = {};
//     console.log("prefix being used: " + prefix); 
//     s3.listObjectsV2(params, (err, data) => {
//         if (err) {
//           console.error('Error retrieving object:', err);
//         } else {
//           // Object retrieved successfully
//             console.log('Object retrieved successfully:'); // data.contents is everything 
//             // Do something with the data (e.g., save it to a file)
//             data.Contents.forEach(object => {
//                 const objectParams = {
//                     Bucket: bucketName,
//                     Key: object.Key
//                 };
//                 s3.getObjectTagging(objectParams, (tagErr, tagData) => {
//                     if (tagErr) {
//                         console.error('Error retrieving tags for object', object.Key, ':', tagErr);
//                     } else {
//                         //console.log('Tags for object', object.Key, ':', tagData.TagSet);
//                         var tagLabel = tagData.TagSet[0].Value;
//                         //console.log("tag label: " + tagLabel); 
//                         ingredientsArrayList[object.Key] = {label: tagLabel}; 
//                     }
//                 });
//             });
//         }
//     });

//     console.log("SessionKey from S3 function: " + sessionStorage.getItem("sessionKey"));
//     return ingredientsArrayList;
// }
export async function getIngredients(bucketName, prefix) {
    const params = {
        Bucket: bucketName,
        Prefix: prefix
    };

    const data = await s3.listObjectsV2(params).promise();
    console.log('Object retrieved successfully:');

    const ingredientsArrayList = {};

    for (const object of data.Contents) {
        const objectParams = {
            Bucket: bucketName,
            Key: object.Key
        };

        const tagData = await s3.getObjectTagging(objectParams).promise();
        const tagLabel = tagData.TagSet[0].Value;

        ingredientsArrayList[object.Key] = { label: tagLabel };
    }

    console.log("SessionKey from S3 function: " + sessionStorage.getItem("sessionKey"));
    return ingredientsArrayList;
}
