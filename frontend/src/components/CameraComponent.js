import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from 'react';
import '../css/CameraComponent.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { generateURL, getIngredients } from './s3';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";


/*pre-processing bucket for Rekognition */
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });


/* count for which number of image it is currently */
let count = 0;

/* creates file name and increments count every time a user "okays" an image */
function createFileName() {
    let filename = sessionStorage.getItem("sessionKey") + '_' + count + '.jpg';
    count++;
    return filename;
}

/*dictionary of ingredients to pass to state of the ingredients list component
Key: img name (e.g. sessionKey_01.jpg)
Value: json with the id, label and the img_url
*/
var ingred = {};


/*called every time Camera component is generated to */
export function deleteIngredients(deletedIngredients){
    if (deletedIngredients.length != 0) { // iif the list contains values to delete from the dictionary 
        for (let keyIndex = 0; keyIndex < deletedIngredients.length; keyIndex++) { // delete it from the dictionary 
            var imgKey = deletedIngredients[keyIndex];
            console.log("img:" + imgKey);
            ingred = Object.keys(ingred).filter(objKey => objKey != imgKey).reduce((newObj, key) =>
                {
                    newObj[key] = ingred[key];
                    return newObj; 
                }, {}
        
            );
        }
    }
    
    // print statement to determine if it was successfully deleted 
    for (let k in ingred) {
        console.log("after deleted: " + k);
    }
}

/*gets the ingredients from the S3 bucket and updates the ingredients dictionary */
function getIngredientsS3() {
    var ingredientsDict = getIngredients(sessionStorage.getItem("sessionKey"));

    ingredientsDict.then(function (value) {
        // TODO: deletes the deleted values from the dictionary to update it => having problem currently with updating the state of the ingred list comp 
        // like when i pass it in it sees that the image isnt there anymore (good) but its not like seeing that the list has changed really

        var idCount = 0;
        
        // adds ingredients pulled from s3 to a formatted list to be sent to ingredient list
        for (const key in value) {
            if (value.hasOwnProperty(key)) { // if it has a value 
                
                var img_link = "https://postsouschef.s3.amazonaws.com/" + key;
                var jsonForm = {
                    id: idCount,
                    label: value[key].label,
                    image_url: img_link,
                    img_key: key
                };

                ingred[key] = jsonForm;
                //ingred.push(jsonForm); 
                console.log("Key:", key);
                idCount++;

            }
        }

        for (let k in ingred) {
            console.log("after going thru the thing to make it not fucked: " + k);
        }
    }).catch(function (error) {
        console.error(error); // Handle errors if the Promise is rejected
    });
}

function CameraComponent({ deletedIngredients }) {
    deleteIngredients(deletedIngredients); // update the dictionary 
    // stuff for the camera component image stuff how it shows up on the screen 
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const widthPhoto = 414;
    const heightPhoto = widthPhoto / (16 / 9);

    // if there is a photo taken it will show it on the screen 
    const [hasPhoto, setHasPhoto] = useState(false);

    // show the "camera footage" on the screen 
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 1920, height: 1080 }
            })
            .then(stream => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play().catch((e) => {
                    console.error(e);
                });
            })
            .catch(err => {
                console.error(err);
            })
    }

    // shows the video on the screen if there is a change
    useEffect(() => {
        getVideo();

    }, [videoRef]);

    // takes a photo and displays the captured image on the screen 
    const takePhoto = () => {


        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = widthPhoto;
        photo.height = heightPhoto;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, widthPhoto, heightPhoto); // displays current status of camera screen

        setHasPhoto(true);
    }

    // closes out of the photo 
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    }

    // saves the photo s3 bucket 
    const savePhoto = async () => {
        let photo = photoRef.current;
        let video = videoRef.current;
        photo.width = widthPhoto;
        photo.height = heightPhoto;

        const filename = createFileName();
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, widthPhoto, heightPhoto);
        /**
         * @todo fix the image
         * Description:
         * Image that is showcased during preview isn't the image being saved in
         * the s3. The image that is saved is whatever state the camera is when the
         * confirm button is pressed
         */
        // Convert canvas to blob
        photo.toBlob(async function (blob) {
            try {
                // Generate signed URL for uploading to pre-souschef bucket 
                const url = await generateURL(filename);

                // Upload photo to S3 using PUT request
                await fetch(url, {
                    method: 'PUT',
                    body: blob,
                    headers: {
                        'Content-Type': 'image/jpeg'
                    }
                });

                console.log('Photo uploaded successfully to S3.');
            } catch (error) {
                console.error('Error uploading photo to S3:', error);
            }
        }, 'image/jpeg');

        // wait for the request to process before getting the ingredients from the s3 bucket 
        await new Promise(r => setTimeout(r, 3000));
        getIngredientsS3();
    }



    return (
        <div>
            <div className="CameraComponent">
                <div className="camera">
                    <video ref={videoRef}></video>
                </div>

                <div className="flex flex-col">
                {/* opens up the initial image  */}
                    <div class="flex items-center justify-center">
                        <button class="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white 
                    focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={takePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Take Photo
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="flex flex-col">

                {/* if there is a photo show the photo on the screen  */}
                <div className={"result " + (hasPhoto ? "hasPhoto" : "")}>
                    <div class="flex items-center justify-center pl-80">
                        <canvas ref={photoRef}></canvas>
                    </div>
                    <br />
                    <div class="flex items-center justify-center pl-40">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white 
                        focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={closePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Retake
                            </span>
                        </button>
                    </div>


                {/* saves the photo to the s3 bucket  */}
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white
                focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={savePhoto}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Save Photo
                        </span>
                    </button>


                {/* pass the ingredients dictionary to the state of the ingredientlist page */}
                    <Link to={'/ingredientlist'} state={ingred}>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white
                focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">

                            Next
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    );
}
export default CameraComponent; 