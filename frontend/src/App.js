import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IngredientUploadComponent from './components/upload/IngredientUploadComponent';
import LandingPageComponent from './components/LandingPageComponent';
import RecipeView from "./components/recipes/RecipeList";
import IngredientList from './components/ingredient-list/IngredientList';
import Recipe from './components/recipes/RecipeInformation';

function App() {
    return (
        <Routes>
            <Route exact path='/' element={<LandingPageComponent/>}/>
            <Route exact path='/ingredientupload' element={<IngredientUploadComponent/>}/>
            <Route exact path='/ingredientlist' element={<IngredientList/>}/>
            <Route exact path= '/recipes' element={<RecipeView/>}/>
            <Route exact path= '/recipeInformation/:recipeName' element={<Recipe/>}/>
        </Routes>
    );
}

export default App;
