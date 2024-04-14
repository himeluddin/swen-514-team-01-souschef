/*
This is where the recipe cards will be shown 
*/
import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from '../aws/ApiGatewayService';
import { useLocation } from "react-router-dom";

function RecipeView() {
    const location = useLocation();  
    const ingredients = location.state;
    const RECIPE_THRESHOLD = 12;

    const [recipes, setRecipes] = useState([]);
    const [numRecipes, setNumRecipes] = useState(3);

    const generateRecipes = () => {
        if (numRecipes < RECIPE_THRESHOLD) {
            setNumRecipes(numRecipes + 3);
        }
    }

    const renderCards = () => {
        const renderRecipes = recipes.slice(0, numRecipes);
        return renderRecipes.map((recipe) => <RecipeCard recipe={recipe}/>);
    }

    const fetchData = async () => {
        try {
            // Fetch recipe data directly within the component
            const recipeData = await fetchRecipes(ingredients);

            // Check if recipeData is not null and has the expected structure
            if (recipeData && recipeData.data) {
                // Extract the 'data' property from the response
                setRecipes(recipeData.data);
                sessionStorage.setItem("recipeList",JSON.stringify(recipeData.data)); 
            } else {
                throw new Error('Invalid recipe data format');
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }

    useEffect(() => {
        // if the session storage doesnt have anything in it yet then do the fetch data 
        if (sessionStorage.getItem("recipeList") == null) {
            fetchData(); 
        // if the session storage has already been called it will say that the session storage is not null, therefore, grab that data 
        } else {
            setRecipes(JSON.parse(sessionStorage.getItem("recipeList"))); 
        }
    }, [ingredients, recipes]);

    return (
        <div className={"h-screen"}>
            <NavBar pageTitle="Generated Recipes" showCloseButton={true}/>
            {renderCards()}
            <div className="sticky p-3 px-10 bottom-0 bg-slate-300">
                <button onClick={() => generateRecipes()} className="static justify-center inline-flex p-1 w-full overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span className="static w-full h-12 px-5 py-2 text-2xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Generate More Recipes
                    </span>
                </button>
            </div> 
        </div>
    );
}

export default RecipeView;
