import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function IngredientListContainer({ ingredients = [] }) {     
    const [ingredientsList, setIngredientsList] = useState(ingredients);

    //setIngredientsList(ingredients);
    // const addCard = () => {
    //     setIngredientsList([
    //         {ingredient: "Apple", ingredientUrl: "../imgs/apple.jpg"},
    //         {ingredient: "Apple2", ingredientUrl: "../imgs/apple.jpg"},
    //         {ingredient: "Apple3", ingredientUrl: "../imgs/apple.jpg"}
    //     ]);
    // }

    // if we make any changes to to ingredientsList we have to do it 
    // through setIngredientsList function 
    console.log("ingred list containers ingred length: "  + JSON.stringify(ingredientsList)); 
    
    //const formattedIngredients = ingredientsList.some((ingredient) => ingredient.id)
    const uniqueIngredients = [];

    ingredientsList.forEach((ingredient) => {
        if (!uniqueIngredients.find((uniqueIngredient) => uniqueIngredient.id === ingredient.id)) {
            uniqueIngredients.push(ingredient);
        }
    })

    console.log(uniqueIngredients);
    
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