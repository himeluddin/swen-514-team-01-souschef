import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function IngredientListContainer({ ingredients, removeCard }) {
    // pass in an array of our json objects from the dictionary from IngredientUploadComponent
    // for each ingredient in the passed in ingredients list, it will map it will create a ingredient card with the populated information 
    const formattedIngredients = Object.values(ingredients).map((ingredient) => {
        return (
            <IngredientCard ingredient={ingredient} removeCard={(removedIngredient) => removeCard(removedIngredient)}/>
        )
    });

    return (
        <div>
            {formattedIngredients}
        </div>
    )
}

export default IngredientListContainer;