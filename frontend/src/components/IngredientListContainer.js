import { useState } from "react"
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

    return (
        <div>
            {ingredientsList.map((ingredientInfo) => <IngredientCard ingredientInfo={ingredientInfo}/>)}
        </div>
    )

}

export default IngredientListContainer;