import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function IngredientListContainer({ ingredients = [] }) {     
    const [ingredientsList, setIngredientsList] = useState(ingredients);

    const uniqueIngredients = [];

    ingredientsList.forEach((ingredient) => {
        if (!uniqueIngredients.find((uniqueIngredient) => uniqueIngredient.id === ingredient.id)) {
            uniqueIngredients.push(ingredient);
        }
    })

    
    const formattedIngredients = uniqueIngredients.map((ingredientInfo) => {
        return (
            <IngredientCard ingredientInfo={ingredientInfo}/>
        )
    });

    return (

        <div>
            {formattedIngredients}
        </div>

    )

}

export default IngredientListContainer;