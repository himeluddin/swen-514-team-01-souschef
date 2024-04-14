import '../css/CameraComponent.css';
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { generateURL, getIngredients } from './s3';

function CameraComponent({ ingredients, setIngredients }) {
    // stuff for the camera component image stuff how it shows up on the screen 
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    // if there is a photo taken it will show it on the screen 
    const [hasPhoto, setHasPhoto] = useState(false);
    const [count, setCount] = useState(0);

    /*pre-processing bucket for Rekognition */
    const AWS = require('aws-sdk');
    AWS.config.update({ region: 'us-east-1' });

    /* creates file name and increments count every time a user "okays" an image */
    const createFileName = () => {
        let updatedCount = count;
        let filename = sessionStorage.getItem("sessionKey") + '_' + updatedCount + '.jpg';

        while (filename in ingredients) {
            updatedCount += 1;
            filename = sessionStorage.getItem("sessionKey") + '_' + updatedCount + '.jpg';
        }

        setCount(updatedCount + 1);
        return filename;
    }

    /*gets the ingredients from the S3 bucket and updates the ingredients dictionary */
    const getIngredientsS3 = () => {
        const ingredientsDict = getIngredients(sessionStorage.getItem("sessionKey"));
        ingredientsDict.then(function (value) {
            const updatedIngredients = {...ingredients}
            let idCount = count;

            // adds ingredients pulled from s3 to a formatted list to be sent to ingredient list
            for (const key in value) {
                if (value.hasOwnProperty(key)) { // if it has a value 
                    const img_link = "https://post-souschef.s3.amazonaws.com/" + key;
                    const jsonForm = {
                        id: idCount,
                        label: value[key].label,
                        image_url: img_link,
                        img_key: key
                    };

                    updatedIngredients[key] = jsonForm;
                    idCount++;
                }
            }
            setIngredients(updatedIngredients);
        }).catch(function (error) {
            console.error(error); // Handle errors if the Promise is rejected
        });
    }

    // show the "camera footage" on the screen 
    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 900, height: 900 }
        }).then(stream => {
            const video = videoRef.current;
            video.srcObject = stream;
            video.play().catch((e) => {
                console.error(e);
            });
        }).catch(err => {
            console.error(err);
        })
        setHasPhoto(true);
    }

    // closes out of the photo 
    const closePhoto = () => {
        const photo = photoRef.current;
        const ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height);
    }

    // saves the photo s3 bucket 
    const savePhoto = async () => {
        const photo = photoRef.current;
        const video = videoRef.current;
        photo.width = 414;
        photo.height = photo.width / (16 / 9);

        const filename = createFileName();
        const ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, photo.width, photo.height);

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
            } catch (error) {
                console.error('Error uploading photo to S3:', error);
            }
        }, 'image/jpeg');

        // wait for the request to process before getting the ingredients from the s3 bucket 
        await new Promise(r => setTimeout(r, 3000));
        getIngredientsS3();
    }

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
                <div className="camera">
                    <canvas ref={photoRef}></canvas>
                </div>
                <div className="grid grid-rows-3 gap-4 pt-20">
                    <div>
                        <button onClick={closePhoto} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Clear Screen
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={savePhoto} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" >
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Take Photo
                            </span>
                        </button>
                    </div>
                    <div>
                        {/* pass the ingredients dictionary to the state of the ingredientlist page */}
                        <Link to={'/ingredientlist'} state={ingredients}>
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white
                                    focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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