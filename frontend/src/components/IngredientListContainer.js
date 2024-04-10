import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function IngredientListContainer({ ingredients = [] }) {     
    const [ingredientsList, setIngredientsList] = useState(ingredients);

    const uniqueIngredients = [];

    // ingredientsList.forEach((ingredient) => {
    //     if (!uniqueIngredients.find((uniqueIngredient) => uniqueIngredient.id === ingredient.id)) {
    //         uniqueIngredients.push(ingredient);
    //     }
    // })


    for(let imgKey in ingredientsList){
        uniqueIngredients.push(ingredientsList[imgKey]); 
        console.log("ingred from ingred list container: " + ingredientsList[imgKey].image_url);
    }
    
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