import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { useLocation } from "react-router-dom";
import { getDeletedObjects } from "./s3";
import {deleteObject} from './s3';

/**
 * possible solutions: 
 * maybe look into the labels and see if you can delete the ones that dont exist anymor
 * it seems like its not updating properly 
 * 
 * maybe update the labels somewhere im not sure errmmm 
 */
// function formatLabels(rawIngredients){
//     const uniqueIngredients = [];

//     rawIngredients.forEach((ingredient) => {
//         if (!uniqueIngredients.find((uniqueIngredient) => uniqueIngredient.id === ingredient.id)) {
//             uniqueIngredients.push(ingredient);
//         }
//     })
//     //console.log("unique ingred:" + uniqueIngredients);
//     return uniqueIngredients;
    
// }

function IngredientList() {
    // gets the ingredients passed in through the state (ingred is passed in as a dictionary)
    const location = useLocation();
    const [ingredients, setIngredients] = useState(location.state);

    const removeCard = (removedIngredient) => {
        const updatedIngredients = {...ingredients};
        delete updatedIngredients[removedIngredient.img_key];
        deleteObject(removedIngredient.img_key);
        setIngredients(updatedIngredients);
    }

    console.log(ingredients);
    
    return (
        <div>
            <NavBar pageTitle={"Ingredient List"} />
            {/* passes in the formatted ingred as an array*/}
            <IngredientListContainer ingredients={ingredients} removeCard={(removedIngredient) => removeCard(removedIngredient)}/>
            <Link to={'/ingredientupload'} state={ingredients}>
                <AddButton />
            </Link>
            {/* if the user deletes smth and then hits generate recipe how do we get the most updated formatted ingred */}
            <Link to={'/recipes'} state={ingredients}>
                <GenerateRecipeButton />
            </Link>
        </div>
    );
}
export default IngredientList; 