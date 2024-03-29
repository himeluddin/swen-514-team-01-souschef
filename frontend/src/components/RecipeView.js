import React from "react";
import RecipeCard from "../util/RecipeCard";

function RecipeView() {
    var back = "<";
    var forward = ">";

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
                        <div className="flex-none items-center justify-center pr-40">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {back}
                                </span>
                            </button>
                        </div>
                        <div className="flex-grow items-center justify-center">
                            <h3 className="font-InterExtraLight text-4xl">Generated Recipes</h3>
                        </div>
                        <div className="flex-none items-center justify-center pl-40">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {forward}
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

            {/*<h4 class="text-2xl font-bold dark:text-black">Apple Pie</h4>*/}

            {/*<hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>*/}


            {/*<h1 className="text-3xl font-bold underline">*/}
            {/*    Hello world!*/}
            {/*</h1>*/}
        </div>


    );


}

export default RecipeView;