import './css/App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IngredientUploadComponent from './components/IngredientUploadComponent';
import LandingPageComponent from './components/LandingPageComponent';
import RecipeView from "./components/RecipeView";
import IngredientList from './components/IngredientList';
import Recipe from './components/Recipe';

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
