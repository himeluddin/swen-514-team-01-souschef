import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from 'react';
import '../css/CameraComponent.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

/*pre-processing bucket for Rekognition */
const AWS =require('aws-sdk');
// const fs = require('fs'); 
AWS.config.update({region: 'us-east-1'}); 

const s3 = new AWS.S3(); 
const bucketName = 'pre-souschef'; 

/* count for which number of image it is currently */
let count = 0;

/* creates file name and increments count every time a user "okays" an image */
function createFileName() {
    let filename = sessionStorage.getItem("sessionKey") + '-' + count + '.jpg';
    count++;
    return filename;
}


function CameraComponent() {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const widthPhoto = 414;
    const heightPhoto = widthPhoto / (16 / 9);


    const [hasPhoto, setHasPhoto] = useState(false);

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


    const takePhoto = () => {


        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = widthPhoto;
        photo.height = heightPhoto;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, widthPhoto, heightPhoto); // displays current status of camera screen

        setHasPhoto(true);
    }


    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    }

    const savePhoto = () => {

        let photo = photoRef.current;
        let video = videoRef.current;
        photo.width = widthPhoto;
        photo.height = heightPhoto;
        const filename = createFileName(); 
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, widthPhoto, heightPhoto); // displays current status of camera screen
        
        photo.toBlob(function (blob) {
            // Create a temporary link element
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename; 

            // Trigger a click event on the link to prompt download
            link.click();
        }, 'image/jpeg');

        
        // putting image in s3 
        s3.putObject({
            Bucket: bucketName, 
            Key: filename, 
            Body: photo, // this might be wrong 
        }, (err, data) => {
            if(err) {
                console.error("error uploading image: ", err); 
                return; 
            }
            console.log("image upload success"); 

            const tags = [
                {Key: 'sessionKey', Value: sessionStorage.getItem("sessionKey")},
                {Key: 'label', Value: filename}
            ]; 

            s3.putObjectTagging({
                Bucket: bucketName, 
                Key: filename, 
                Tagging: {
                    TagSet: tags
                }
            }, (err, data) => {
                if (err) {
                    console.error("Error adding tags to the object: ", err); 
                    return; 
                }
                console.log("Tags added successfully");
            });

        });

    }
    return (
        <div>
        <div className="CameraComponent">
                <div className="camera">
                    <video ref={videoRef}></video>
                </div>

                <div className="flex flex-col">
                    <div class="flex items-center justify-center">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
                    focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={takePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Take Photo
                            </span>
                        </button>
                    </div>
                </div>
        </div>

            <div class="flex flex-col">


            <div className={"result " + (hasPhoto ? "hasPhoto" : "")}>
            <div class="flex items-center justify-center pl-80">
                <canvas ref={photoRef}></canvas>
            </div>
            <br/>
                <div class="flex items-center justify-center pl-40">
                        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
                        focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={closePhoto}>
                            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Retake
                            </span>
                        </button>
                </div>
                


                <Link to={'/ingredientlist'}>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white 
                focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" onClick={savePhoto}>
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Next
                        </span>
                    </button>
                </Link>

            

            </div>
            </div>
            </div>
        
    );
}
export default CameraComponent; 