import './css/App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientUploadComponent from './components/IngredientUploadComponent';
import LandingPageComponent from './components/LandingPageComponent';
function App() {
    return (

        <Routes>
        <Route exact path='/' element={<LandingPageComponent/>}/>
        <Route exact path='/ingredientupload' element={<IngredientUploadComponent/>}/>
        
        </Routes>

    );
}

export default App;
