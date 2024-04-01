import React from "react";
import NavBar from "./NavBar";
import { useLocation, useParams } from "react-router-dom";



// this shows on the recipeInformation page
//displays all the possible recipes
function Recipe() {
    // this will be replaced with information from json 
    const { recipeName } = useParams();
    const location = useLocation();
    console.log("link: " + location.state.link);

    // (API PEOPLE)
    //****edit this***///

    return (
        <div className={"h-screen"}>
            <NavBar pageTitle="Recipe Information" showBackButton={true} showCloseButton={true} backLink="/recipes"/>
            <div className="font-InterExtraLight font-bold text-center text-4xl text-gray-900 pb-5">
                {recipeName}
            </div>
            <div className="font-InterExtraLight font-bold text-center mb-4">
                <a href={"//" + location.state.link} className="text-xl text-blue-500 hover:text-purple-500 active:text-purple-500">
                    Go to Recipe
                </a>
            </div>
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

export default Recipe;