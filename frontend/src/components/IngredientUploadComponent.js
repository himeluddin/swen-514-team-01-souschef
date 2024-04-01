import React, { Component, useRef } from 'react';
import CameraComponent from './CameraComponent'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import LandingPageComponent, { generateSessionKey } from './LandingPageComponent';
import NavBar from './NavBar';
const IngredientUploadComponent = () => {
    const webRef = useRef(null); 
    let img = null; 
    const showImage=()=> {
        img =webRef.current.getScreenshot();
    };

    //console.log('sessionKey:' + sessionStorage.getItem("sessionKey"));


    var back = "<"; 
    var forward = ">";
    return (
        <div>
            <NavBar pageTitle="Ingredient Upload" showBackButton={true}/>
            <div class="flex flex-col justify-center items-center ps-px-12 pe-px-12">
                <h3 className="font-InterExtraLight text-lg text-red-300" >Images should be non-blurry and display one ingredient</h3>
                <CameraComponent/>
            </div>
        </div>
    );
}

export default IngredientUploadComponent;

