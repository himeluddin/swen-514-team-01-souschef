import RecipeView from "../components/RecipeView";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BrowserRouter as Router, Route,Routes, Link, use} from 'react-router-dom';
import IngredientList from "../components/IngredientList";

function RecipeCard({recipe,index2}) {
    localStorage.setItem("value",index2);
    return (

            <div
                className="  grid grid-cols-2 shadow-md border-black border-2 place-items-center rounded-t w-1/2 h-full bg-white">
                <div className={"font-InterExtraLight text-2xl font-bold"}>{recipe.ingredients}</div>
                <div className={"grid grid-row-2 place-items-center "}>
                    <div>{index2}</div>
                    <div>ingredients missing</div>
                    <Link to= '/recipeInformation'> 
                        <button
                                    className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span
                                        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        <IoIosCheckmarkCircle></IoIosCheckmarkCircle>
                                    </span>
                                    
                        </button>
                    </Link>
                </div>

            </div>


    )
        ;
}

export default RecipeCard;
