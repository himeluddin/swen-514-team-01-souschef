import './css/App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientUploadComponent from './components/IngredientUploadComponent';
import LandingPageComponent from './components/LandingPageComponent';
import RecipeView from "./components/RecipeView";
import Recipe from "./components/Recipe";
import IngredientCard from './components/IngredientCard';
import IngredientListContainer from './components/IngredientListContainer';
import IngredientList from './components/IngredientList'; 
function App() {
    
    const recipes = [
        { name: 'Apple Cobbler', percent: '50%' },
        { name: 'Apple Cobbler', percent: '50%' }
    ]
    return (

        <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
        <Route exact path='/ingredientupload' element={<IngredientUploadComponent/>}/>
        {/* delete the line after this one and replace this with the ingredients list component to fix routing */}
        <Route exact path='/ingredientlist' element={<IngredientList/>}/>
        <Route exact path= '/recipes' element={<RecipeView/>}/>
        </Routes>

    );
}

export default App;
