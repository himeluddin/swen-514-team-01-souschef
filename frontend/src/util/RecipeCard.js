import RecipeView from "../components/RecipeView";
import React from "react";

function RecipeCard({recipe}) {
    return (

            <div
                className="  grid grid-cols-2 shadow-md border-black border-2 place-items-center rounded-t w-1/2 h-full bg-white">
                <div className={"font-InterExtraLight text-2xl font-bold"}>{recipe.name}</div>
                <div className={"grid grid-row-2 place-items-center "}>
                    <div>{recipe.percent}</div>
                    <div>ingredients missing</div>
                </div>

            </div>


    )
        ;
}

export default RecipeCard;
