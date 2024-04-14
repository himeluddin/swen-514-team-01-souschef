import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { deleteObject } from './s3';

function IngredientList() {
    // gets the ingredients passed in through the state (ingred is passed in as a dictionary)
    const location = useLocation();
    const [ingredients, setIngredients] = useState(location.state);

    const editLabel = (updatedIngredient, newLabel) => {
        const updatedIngredients = {...ingredients};
        updatedIngredients[updatedIngredient.img_key].label = newLabel;
        setIngredients(updatedIngredients);
    }

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
            <IngredientListContainer 
                ingredients={ingredients} 
                editLabel={(updatedIngredient, newLabel) => editLabel(updatedIngredient, newLabel)} 
                removeCard={(removedIngredient) => removeCard(removedIngredient)}
            />
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