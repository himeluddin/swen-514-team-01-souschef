import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function IngredientListContainer({ ingredients = [] }) {     
    const [ingredientsList, setIngredientsList] = useState(ingredients); 
    // pass in an array of our json objects from the dictionary from IngredientUploadComponent

    
    //const uniqueIngredients = [];

    // // puts the 
    // for(let imgKey in ingredientsList){
    //     uniqueIngredients.push(ingredientsList[imgKey]); 
    //     console.log("ingred from ingred list container: " + ingredientsList[imgKey].image_url);
    // }
    
    // for each ingredient in the passed in ingredients list, it will map it will create a ingredient card with the populated information 
    const formattedIngredients = ingredientsList.map((ingredientInfo) => {
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