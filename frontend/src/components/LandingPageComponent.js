import logo from '../imgs/logo_transparent.png';
import React from 'react';
import { Link } from 'react-router-dom';

/* generates a sessionkey for a users current session */
export function generateSessionKey() {
    return Math.random().toString(36).substring(2,9);
}

const LandingPageComponent = () => {
    const sessionKey = generateSessionKey(); 
    sessionStorage.setItem("sessionKey", sessionKey); 
    return (

        <div> 
        <div class="pl-4 pr-4">
        <div class="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center">
                <img src={logo} alt="SousChef Logo"></img>
            </div>
        
            <h3 className="font-InterExtraLight text-5xl">Welcome to SousChef</h3>
            <div className=" p-10">
            <Link to={'/ingredientupload'}>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                    </span>
                </button>
            </Link>
            </div>
        </div>
        </div>
        </div>

    );
};

export default LandingPageComponent; 



