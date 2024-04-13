import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from 'react';
import '../css/CameraComponent.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { generateURL, getIngredients } from './s3';
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

function CameraComponent({ deletedIngredients, ingredients, setIngredients }) {
    /*pre-processing bucket for Rekognition */
    const AWS = require('aws-sdk');

    AWS.config.update({ region: 'us-east-1' });

    /*dictionary of ingredients to pass to state of the ingredients list component
    Key: img name (e.g. sessionKey_01.jpg)
    Value: json with the id, label and the img_url
    */
    // var ingred = {};

    // stuff for the camera component image stuff how it shows up on the screen 
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const widthPhoto = 414;
    const heightPhoto = widthPhoto / (16 / 9);

    // if there is a photo taken it will show it on the screen 
    const [hasPhoto, setHasPhoto] = useState(false);
    const [count, setCount] = useState(0);

    /*called every time Camera component is generated to */
    // const deleteIngredients = (deletedIngredients) => {
    //     if (deletedIngredients.length != 0) { // iif the list contains values to delete from the dictionary 
    //         for (let keyIndex = 0; keyIndex < deletedIngredients.length; keyIndex++) { // delete it from the dictionary 
    //             var imgKey = deletedIngredients[keyIndex];
    //             console.log("img:" + imgKey);
    //             ingred = Object.keys(ingred).filter(objKey => objKey != imgKey).reduce((newObj, key) => {
    //                 newObj[key] = ingred[key];
    //                 return newObj;
    //             }, {}

    //             );
    //         }
    //     }

    //     // print statement to determine if it was successfully deleted 
    //     for (let k in ingred) {
    //         console.log("after deleted: " + k);
    //     }
    // }

    /* creates file name and increments count every time a user "okays" an image */
    const createFileName = () => {
        let updatedCount = count;
        console.log(updatedCount);
        let filename = sessionStorage.getItem("sessionKey") + '_' + updatedCount + '.jpg';
        while (filename in ingredients) {
            updatedCount += 1;
            console.log(updatedCount);
            filename = sessionStorage.getItem("sessionKey") + '_' + updatedCount + '.jpg';
        }
        setCount(updatedCount + 1);
        return filename;
    }

    /*gets the ingredients from the S3 bucket and updates the ingredients dictionary */
    const getIngredientsS3 = () => {
        var ingredientsDict = getIngredients(sessionStorage.getItem("sessionKey"));
        ingredientsDict.then(function (value) {
            // TODO: deletes the deleted values from the dictionary to update it => having problem currently with updating the state of the ingred list comp 
            // like when i pass it in it sees that the image isnt there anymore (good) but its not like seeing that the list has changed really

            var idCount = count;
            let updatedNewIngred = {...ingredients}
            console.log(value)

            // adds ingredients pulled from s3 to a formatted list to be sent to ingredient list
            for (const key in value) {
                if (value.hasOwnProperty(key)) { // if it has a value 

                    var img_link = "https://post-souschef.s3.amazonaws.com/" + key;
                    var jsonForm = {
                        id: idCount,
                        label: value[key].label,
                        image_url: img_link,
                        img_key: key
                    };
                    updatedNewIngred[key] = jsonForm;
                    idCount++;
                }
            }
            setIngredients(updatedNewIngred);
        }).catch(function (error) {
            console.error(error); // Handle errors if the Promise is rejected
        });
    }

    // show the "camera footage" on the screen 
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({
                video: { width: 900, height: 900 }
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
        setHasPhoto(true);
    }

    // takes a photo and displays the captured image on the screen 
    // const takePhoto = () => {
    //     let video = videoRef.current;
    //     let photo = photoRef.current;

    //     photo.width = widthPhoto;
    //     photo.height = heightPhoto;

    //     let ctx = photo.getContext('2d');
    //     ctx.drawImage(video, 0, 0, videoRef.current.width, videoRef.current.height); // displays current status of camera screen

    //     setHasPhoto(true);
    // }

    // closes out of the photo 
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);
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
    
    // deleteIngredients(deletedIngredients); // update the dictionary 

    // shows the video on the screen if there is a change
    useEffect(() => {
        getVideo();
    }, [videoRef]);

    return (
        <div>
            <div className="CameraComponent">
                <div className="camera">
                    <video ref={videoRef}></video>
                </div>
            </div>
            <div className={"result " + (hasPhoto ? "hasPhoto" : "")}>
                <div class="camera">
                    <canvas ref={photoRef}></canvas>
                </div>
                <div className="grid grid-rows-3 gap-4 pt-20">
                    <div>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white 
                            focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={closePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Clear Screen
                            </span>
                        </button>
                    </div>
                    <div>
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white
                focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={savePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Take Photo
                            </span>
                        </button>
                    </div>
                    <div>
                        {/* pass the ingredients dictionary to the state of the ingredientlist page */}
                <Link to={'/ingredientlist'} state={ingredients}>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white
                                    focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                            Next Page
                        </span>
                    </button>
                </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CameraComponent; 