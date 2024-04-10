import React, { Component, useRef } from 'react';
import CameraComponent from './CameraComponent'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import LandingPageComponent, { generateSessionKey } from './LandingPageComponent';
import NavBar from './NavBar';
import { useLocation } from "react-router-dom";
import { getDeletedObjects } from "./s3"; 


const IngredientUploadComponent = () => {
    const webRef = useRef(null); 
    let img = null; 
    const showImage=()=> {
        img =webRef.current.getScreenshot();
    };
    
    var deletedIngredients = getDeletedObjects(); 
    for(let k= 0; k < deletedIngredients.length; k++){
        console.log("deleted object from the ingred upload comp method: " +  deletedIngredients[k]); 
    }
    
    

    //console.log('sessionKey:' + sessionStorage.getItem("sessionKey"));
    // backLink="/ingredientlist"
    return (
        <div>
            <NavBar pageTitle="Ingredient Upload" showBackButton={true}/> 
            <div class="flex flex-col justify-center items-center ps-px-12 pe-px-12">
                <h3 className="font-InterExtraLight text-lg text-red-300" >Images should be non-blurry and display one ingredient</h3>
                <CameraComponent deletedIngredients={deletedIngredients}/>
            </div>
        </div>
    );
}

export default IngredientUploadComponent;

