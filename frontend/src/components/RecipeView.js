/*
This is where the recipe cards will be shown 
*/
import React from "react";
import RecipeCard from "../util/RecipeCard";
import { useLocation } from "react-router-dom";

function RecipeView() {
    // you still need to do element.label to get the actual label ... otherwise the sorting stuff dont work to get the non copies 
    const location = useLocation(); 
    const ingredLabels = location.state; 
    console.log("ingred labels recipie view: " + ingredLabels);
    
    var end_session = "x";
    // api call be called when this page is rendered 
    // HOW DO WE STORE THE JSON?  perhaps store it as a session storage? 
    // need method to load in data from the json from api call 
    const recipes = [
        { name: 'Apple Cobbler', percent: '50%' },
        { name: 'Apple Cobbler', percent: '50%' }
    ]

    return (
        <div className={"h-screen "}>

            {/*nav bar*/}
            <div className="w-full">
                <div className="flex flex-col justify-center items-center py-7">
                    <div className="flex flex-row">
                        <div className="flex-grow items-center justify-center">
                            <h3 className="font-InterExtraLight text-4xl">Generated Recipes</h3>
                        </div>
                        <div className="flex-none items-center justify-center pl-40">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {end_session}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Generate All Recipe button*/}

            {recipes.map((i) => <li className={"w-full h-1/4 flex items-center justify-center pt-3"}>
                    <RecipeCard recipe={i}></RecipeCard>
            </li>)}


            {/*Generate Recipe button*/}
            <div class=" w-full absolute bottom-0 flex items-center justify-center ">
                <div class="w-1/2  flex items-center justify-center">
                    <button
                        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Generate Recipes
                    </button>
                </div>

            </div>

        </div>


    );


}

export default RecipeView;