import React, { Component, useRef } from 'react';
import CameraComponent from './CameraComponent'
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Webcam from 'react-webcam';
import LandingPageComponent, { generateSessionKey } from './LandingPageComponent';


const IngredientUploadComponent = () => {
    const webRef = useRef(null); 
    let img = null; 
    const showImage=()=> {
        img =webRef.current.getScreenshot();
    };

    console.log('sessionKey:' + sessionStorage.getItem("sessionKey"));

    var back = "<"; 
    var forward = ">";
    return (
        <div>
            <div class="pt-10 p1-10 pr-10">
                <div class="flex flex-col justify-center items-center">
                    <div class="flex flex-row">
                        <div class="flex-none items-center justify-center pr-40">
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {back}
                                </span>
                            </button>
                        </div>

                        <div class="flex-grow items-center justify-center">
                            <h3 className="font-InterExtraLight text-4xl">Ingredients Upload</h3>
                        </div>

                        <div class="flex-none items-center justify-center pl-40">
                            <Link to={'/ingredientlist'}>
                            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {forward}
                                </span>
                            </button>
                            </Link>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <hr class="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div class="flex flex-col justify-center items-center ps-px-12 pe-px-12">
                <h3 className="font-InterExtraLight text-lg text-red-300" >Images should be non-blurry and display one ingredient</h3>
                <CameraComponent/>
            </div>
            
            

        </div>
    );
}

export default IngredientUploadComponent;

