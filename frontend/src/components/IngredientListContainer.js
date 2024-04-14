import IngredientCard from "./IngredientCard"
function IngredientListContainer({ ingredients, editLabel, removeCard }) {
    // pass in an array of our json objects from the dictionary from IngredientUploadComponent
    // for each ingredient in the passed in ingredients list, it will map it will create a ingredient card with the populated information 
    const formattedIngredients = Object.values(ingredients).map((ingredient) => {
        return (
            <IngredientCard ingredient={ingredient} editLabel={editLabel} removeCard={removeCard}/>
        )
    });

    return (
        <div>
            {formattedIngredients}
        </div>
    )
}

export default IngredientListContainer;