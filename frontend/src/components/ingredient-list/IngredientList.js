import IngredientCard from "./IngredientCard";
import NavBar from "../NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { deleteObject } from '../aws/s3';

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

    const formattedIngredients = Object.values(ingredients).map((ingredient) => {
        return (
            <IngredientCard 
                key={ingredient.id}
                ingredient={ingredient} 
                editLabel={(updatedIngredient, newLabel) => editLabel(updatedIngredient, newLabel)} 
                removeCard={(removedingredient) => removeCard(removedingredient)}
            />
        )
    });

    return (
        <div>
            <NavBar pageTitle={"Ingredient List"} />
            {formattedIngredients}
            <Link to={'/ingredientupload'} state={ingredients}>
                <AddButton />
            </Link>
            <Link to={'/recipes'} state={ingredients}>
                <GenerateRecipeButton />
            </Link>
        </div>
    );
}
export default IngredientList; 