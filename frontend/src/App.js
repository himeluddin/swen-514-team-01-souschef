import './css/App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientUploadComponent from './components/IngredientUploadComponent';
import LandingPageComponent from './components/LandingPageComponent';
import RecipeView from "./components/RecipeView";
import Recipe from "./components/Recipe";

function App() {
    const recipe = [

    ]
    return (
        <RecipeView></RecipeView>
        // <Recipe ingredient={ {ingredent_list: ["apple","orange"],instruction_list: ["to do 1","to do 2"]} }></Recipe>
        // <Routes>
        // <Route exact path='/' element={<LandingPageComponent/>}/>
        // <Route exact path='/ingredientupload' element={<IngredientUploadComponent/>}/>
        //
        //  </Routes>

    );
}

export default App;
