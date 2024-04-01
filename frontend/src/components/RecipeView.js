/*
This is where the recipe cards will be shown
*/
import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import RecipeCard from "../util/RecipeCard";
import { useLocation } from "react-router-dom";
import {fetchRecipes} from "./ApiGatewayService";

function RecipeView() {
    // // you still need to do element.label to get the actual label ... otherwise the sorting stuff dont work to get the non copies
    // const location = useLocation();
    // const ingredLabels = location.state;
    // console.log("ingred labels recipie view: " + ingredLabels);
    //
    // var end_session = "x";
    // // api call be called when this page is rendered
    // // HOW DO WE STORE THE JSON?  perhaps store it as a session storage?
    // // need method to load in data from the json from api call
    // const recipes = [
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" },
    //     { name: 'Apple Cobbler', percent: '50%', link: "https://www.yummly.com/recipe/Apple-Cobbler-9100948?prm-v1" }
    // ]
    //


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

    const [numRecipes, setNumRecipes] = useState(3);

    const generateRecipes = () => {
        if (numRecipes < 12) {
            setNumRecipes(numRecipes + 3);
        }
    }

    const renderCards = () => {
       return(
        recipes.map((recipe, index =0) => (
            // console.log(recipe)
            <RecipeCard index2 = {index +=1} key={index } recipe={recipe} />

        ))
       );
    }



    return (
        <div className={"h-screen"}>
            <NavBar pageTitle="Generated Recipes" showCloseButton={true}/>
            {renderCards()}
            <div class="sticky p-3 px-10 bottom-0 bg-slate-300">
                <button onClick={() => generateRecipes()} class="static justify-center inline-flex p-1 w-full overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="static w-full h-12 px-5 py-2 text-2xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Generate More Recipes
                    </span>
                </button>
            </div>
        </div>
    );
}

export default RecipeView;
