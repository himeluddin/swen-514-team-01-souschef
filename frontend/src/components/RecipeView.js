import React, { useState, useEffect } from "react";
import RecipeCard from "../util/RecipeCard";
import { fetchRecipes } from './ApiGatewayService';

function RecipeView() {
    const [recipes, setRecipes] = useState([]);
    let number2 = 0
    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch recipe data directly within the component
                const recipeData = await fetchRecipes(["chicken", "rice", "lemon"]);
                // Check if recipeData is not null and has the expected structure
                if (recipeData && recipeData.data) {
                    // Extract the 'data' property from the response

                    setRecipes(recipeData.data);
                    localStorage.setItem("recipeList",JSON.stringify(recipeData.data));
                } else {
                    throw new Error('Invalid recipe data format');
                }
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        }
        fetchData();
    }, []);

    return (

        <div className="h-screen">
            {/* Your existing JSX code */}
            {/* Recipe cards */}
            <div className="grid grid-cols-2 gap-4 p-4">

                {recipes.map((recipe, index =0) => (

                    <RecipeCard index2 = {index +=1} key={index } recipe={recipe} />

                    ))}
            </div>

            {/* Generate Recipe button */}
            <div className="w-full fixed bottom-0 flex items-center justify-center">
                <div className="w-1/2 flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Generate Recipes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RecipeView;
