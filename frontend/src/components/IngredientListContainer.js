import { useEffect, useState } from "react"
import IngredientCard from "./IngredientCard"

function IngredientListContainer({ ingredients }) {
    const [ingredientsList, setIngredientsList] = useState(ingredients);

    // const addCard = () => {
    //     setIngredientsList([
    //         {ingredient: "Apple", ingredientUrl: "../imgs/apple.jpg"},
    //         {ingredient: "Apple2", ingredientUrl: "../imgs/apple.jpg"},
    //         {ingredient: "Apple3", ingredientUrl: "../imgs/apple.jpg"}
    //     ]);
    // }
    const formattedIngredients = ingredientsList.map((ingredientInfo) => {
        return (
            <IngredientCard ingredientInfo={ingredientInfo} />
        )
    });

    return (
        <div>
            {formattedIngredients}
        </div>
    )
}

export default IngredientListContainer;