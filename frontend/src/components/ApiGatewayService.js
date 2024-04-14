const apiUrl = 'https://hz2o6fp7a3.execute-api.us-east-1.amazonaws.com/RecipeRequest/Recipes?';

// Parses the URL to be sent to the API by adding query strings to it
function parsedIngredients(ingredientList) {
    let processedUrl = apiUrl; 
    
    for (let ingredient of Object.values(ingredientList)) {
        const ingredientlabel = ingredient.label.toLowerCase();
        processedUrl += ingredient === ingredientList[Object.keys(ingredientList)[Object.keys(ingredientList).length - 1]] 
            ? "ingredients=" + encodeURIComponent(ingredientlabel)
            : "ingredients=" + encodeURIComponent(ingredientlabel) + "&";
    }
    
    return processedUrl;
}

// Requests recipes from the API
export async function fetchRecipes(ingredientList) {
    try {
        const apiUrlWithIngredients = parsedIngredients(ingredientList);
        const response = await fetch(apiUrlWithIngredients);

        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response JSON
        return await response.json();
    } catch (error) {
        // Handle errors
        console.error('Error fetching recipes:', error);
        return null;
    }
}
