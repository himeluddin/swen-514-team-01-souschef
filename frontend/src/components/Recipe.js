import React from "react";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

// this shows on the recipeInformation page
//displays all the possible recipes
function Recipe() {
    // this will be replaced with information from json 
    const { recipeName } = useParams();

    // (API PEOPLE)
    //****edit this***///
    const ingredient = {ingredent_list: ["apple","orange"],instruction_list: ["to do 1","to do 2"]}

    return (
        <div className={"h-screen"}>
            <NavBar pageTitle="Recipe Information" showBackButton={true} showCloseButton={true} backLink="/recipes"/>
            <div className="flex flex-col space-y-4  items-center w-full h-full ">
                <div className={"w-1/2 h-1/4 shadow-md border-black border-2 pr-4"}>
                    <div className="font-bold text-xl mb-2 pl-5">Ingredients</div>
                    <ul className="list-disc pl-12">
                        {ingredient.ingredent_list.map((i) => <li>{i}</li>)}
                    </ul>
                </div>
                <div className={"w-1/2 h-1/4 shadow-md border-black border-2 "}>
                    <div className="font-bold text-xl mb-2 pl-5">Instructions</div>
                    <ul className="list-decimal pl-12">
                        {ingredient.instruction_list.map((i) => <li>{i}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Recipe;