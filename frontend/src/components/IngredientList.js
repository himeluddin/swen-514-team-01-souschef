import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { useLocation } from "react-router-dom";

/**
 * possible solutions: 
 * maybe look into the labels and see if you can delete the ones that dont exist anymor
 * it seems like its not updating properly 
 * 
 * maybe update the labels somewhere im not sure errmmm 
 */
function formatLabels(rawIngredients){
    const uniqueIngredients = [];

    rawIngredients.forEach((ingredient) => {
        if (!uniqueIngredients.find((uniqueIngredient) => uniqueIngredient.id === ingredient.id)) {
            uniqueIngredients.push(ingredient);
        }
    })
    //console.log("unique ingred:" + uniqueIngredients);
    return uniqueIngredients;
    
}

function IngredientList() {

    // gets the ingredients passed in through the state (ingred is passed in as a dictionary)
    const location = useLocation(); 
    const ingred = location.state; // this is a dictionary

    
    // gets the json from the stored value of the dictionary
    var ingredFormatted = []; 
    for(let imgKey in ingred){
        ingredFormatted.push(ingred[imgKey]); 
    }
    
    return (
        <div>
            <NavBar pageTitle={"Ingredient List"} />
            {/* passes in the ingred dictionary  */}
            <IngredientListContainer ingredients={ingredFormatted}/>
            <Link to={'/ingredientupload'}>
                <AddButton />
            </Link>

            <Link to={'/recipes'} state={ingredFormatted}>
                <GenerateRecipeButton />
            </Link>
        </div>
    );
}
export default IngredientList; 