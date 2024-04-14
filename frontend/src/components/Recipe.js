import React from "react";
import NavBar from "./NavBar";
import { useLocation, useParams } from "react-router-dom";
import '../css/Recipe.css'; 

// this shows on the recipeInformation page
//displays all the possible recipes

export default function Recipe() {
    // this will be replaced with information from json 
    const { recipeName } = useParams();
    
    // will be used to get the link, ingredients and formatting (?) ask Dom 
    const location = useLocation();
    console.log("link: " + location.state.link);
    function handlePrint() {
        window.print()

}

    return (
        <div  className={"h-screen"}>
            <NavBar pageTitle="Recipe Information" showBackButton={true} showCloseButton={true} backLink="/recipes"/>
            <div className="font-InterExtraLight font-bold text-center text-4xl text-gray-900 pb-5">
                {recipeName}
            </div>
            <div className="font-InterExtraLight font-bold text-center mb-4">
                <a href={"//" + location.state.link} className="text-xl text-blue-500 hover:text-purple-500 active:text-purple-500">
                    Go to Recipe
                </a>
            </div>
            
<button onClick={() => handlePrint()} className="sticky-button static justify-center inline-flex p-1 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="static h-12 px-5 py-2 text-2xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                        Share
                    </span>
            
            </button>
            <div className="flex flex-col space-y-4 items-center w-full h-full mb-5">
                <div className="w-2/3 h-auto shadow-lg border border-gray-400 lg:border-gray-400 bg-white rounded p-4">
                    <div className="font-bold text-xl mb-2 pl-5">
                        Ingredients
                    </div>
                    <ul className="list-disc pl-12">
                        {location.state.ingredients.map((i) => <li>{i}</li>)}
                    </ul>
                </div>
                <div className="w-2/3 h-auto shadow-lg border border-gray-400 lg:border-gray-400 bg-white rounded p-4">
                    <div className="font-bold text-xl mb-2 pl-5">
                        Instructions
                    </div>
                    <ul className="list-decimal pl-12">
                        {location.state.directions.map((step) => <li>{step}</li>)}
                    </ul>
                    
                </div>

            </div>
        </div>
    );
}




