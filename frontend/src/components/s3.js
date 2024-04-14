/**
 * File containing bucket information and where credentials should be defined 
 * Also contains all AWS interfacing methods that we made
 */
var bucketRegion = "us-east-1";
const accessKeyId = process.env.ACCESS_KEY; 
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const BUCKET_NAME_POST = "post-souschef";
const BUCKET_NAME_PRE = "pre-souschef";
const AWS = require('aws-sdk');
var deletedObjects = [];

// s3 instance to access the s3 buckets
const s3 = new AWS.S3({
    region: bucketRegion,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    },
    signatureVersion: 'v4'
});

// not sure what this method is for but I know that Himel made this and it may be used somewhere
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

// generates the url to make a PUT request to s3 bucket 
export async function generateURL(keyName) {

    const params = ({
        Bucket: BUCKET_NAME_PRE,
        Key: keyName,
        Expires: 60
    })

    return await s3.getSignedUrlPromise('putObject', params)
}

// gets the ingredients that correspond to the given prefix (a user's sessionkey)
export async function getIngredients(prefix) {
    const params = {
        Bucket: BUCKET_NAME_POST,
        Prefix: prefix
    };

    const data = await s3.listObjectsV2(params).promise();

    const ingredientsDict = {};

    for (const object of data.Contents) {
        const objectParams = {
            Bucket: BUCKET_NAME_POST,
            Key: object.Key
        };

        const tagData = await s3.getObjectTagging(objectParams).promise();
        const tagLabel = tagData.TagSet[0].Value;

        ingredientsDict[object.Key] = { label: tagLabel };
    }

    console.log("length of ingred dict s3: " + Object.keys(ingredientsDict).length);

    return ingredientsDict;
}

/*updates the label in the s3 bucket with the updated label from the user and the image name to update  */
export async function updateLabel(imageName, updatedLabel) {
    const params = {
        Bucket: BUCKET_NAME_POST,
        Key: imageName,
        Tagging: {
            TagSet: [
                {
                    Key: 'Label', // not sure if this is the right case 
                    Value: updatedLabel
                }

            ]
        }
    }

    s3.putObjectTagging(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Object tags updated successfully", data);
        }
    });

}

/**deletes objects from bucket given the name of the image  */
export async function deleteObject(imageName) {
    const params = {
        Bucket: BUCKET_NAME_POST,
        Key: imageName
    };

    console.log("img name of deleted obj from DeleteObj function: " + imageName);
    deletedObjects.push(imageName);

    // Delete the object
    s3.deleteObject(params, function (err, data) {
        if (err) {
            console.log("Error deleting object:", err);
        } else {
            console.log("Object deleted successfully:", data);
        }
    });
}

/* gets the list of deletedObjects from here */
export function getDeletedObjects() {
    for (let k = 0; k < deletedObjects.length; k++) {
        console.log("deleted object from the getDeletedObjects method: " + deletedObjects);
    }
    return deletedObjects; // return the objects that were deleted in a session 
}



// this function will find all the objects in the s3 bucket with the specified session key 
// it will also clear the session key of the window with sessionStorage.setItem("sessionKey", 0)
// it will also clear the recipeList session storage
export async function endSession(sessionKey) {
    try {
        // List objects with the prefix
        const data = await s3.listObjectsV2({ Bucket: BUCKET_NAME_POST, Prefix: sessionKey }).promise();

        // Delete each object
        const deletePromises = data.Contents.map(async (obj) => {
            await s3.deleteObject({ Bucket: BUCKET_NAME_POST, Key: obj.Key }).promise();
            console.log(`Deleted: ${obj.Key}`);
        });

        // Wait for all delete operations to complete
        await Promise.all(deletePromises);
        
        
        sessionStorage.setItem("recipeList", null);

        console.log('All objects with prefix ' + sessionKey +  ' deleted successfully.');
        console.log("session storage of session key after this : " + sessionStorage.getItem("sessionKey")); 
        console.log("session storage of recipe list after deleting: " + sessionStorage.getItem("recipeList"));
    } catch (err) {
        console.error('Error deleting objects:', err);
    }
}
