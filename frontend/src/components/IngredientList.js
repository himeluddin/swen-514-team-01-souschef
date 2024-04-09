import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";

import { useLocation } from "react-router-dom";


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

    const location = useLocation(); 
    const ingred = location.state;

    
    var formattedIngred = formatLabels(ingred); 
    console.log(ingred);
    
    return (
        <div>
            <NavBar pageTitle={"Ingredient List"} />
            <IngredientListContainer ingredients={ingred}/>
            <Link to={'/ingredientupload'}>
                <AddButton />
            </Link>

            <Link to={'/recipes'} state={formattedIngred}>
                <GenerateRecipeButton />
            </Link>
        </div>
    );
}
export default IngredientList; 