const apiUrl = 'https://wcoe9gws5i.execute-api.us-east-1.amazonaws.com/deployedAPI/Recipe?';

function parsedIngredients(ingredientList) {
    let processedUrl = apiUrl; // Initialize processedUrl variable

    for (let ingredient of Object.values(ingredientList)) {
        const ingredientlabel = ingredient.label.toLowerCase();
        processedUrl += ingredient == ingredientList[Object.keys(ingredientList)[Object.keys(ingredientList).length - 1]] 
            ? "ingredients=" + encodeURIComponent(ingredientlabel)
            : "ingredients=" + encodeURIComponent(ingredientlabel) + "&";
    }
    
    return processedUrl;
}

export async function fetchRecipes(ingredientList) {

    try {
        const apiUrlWithIngredients = parsedIngredients(ingredientList);

        // Send GET request to the API
        const response = await fetch(apiUrlWithIngredients);

        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response JSON
        return await response.json()

    } catch (error) {
        // Handle errors
        console.error('Error fetching recipes:', error);
        return null;
    }
}
