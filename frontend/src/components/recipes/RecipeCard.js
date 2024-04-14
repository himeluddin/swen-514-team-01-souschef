import React from "react";
import { Link } from 'react-router-dom';

/* these are the cards that are generated when the recipes are generated */
function RecipeCard({recipe}) {
    return (
        <div className="p-3 px-10 h-48 max-w-sm w-full lg:max-w-full lg:flex">
            <div className="w-full shadow-lg border border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
                <div className="text-gray-900 font-bold text-4xl">
                    {recipe.title}
                </div>
                <div className="flex items-center card-button">
                    <Link to={'/recipeInformation/' + recipe.title} state={recipe}> 
                        <button className="static card-button inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="static px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                View Recipe
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
