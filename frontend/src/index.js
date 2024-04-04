import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPageComponent from './components/LandingPageComponent';
import IngredientUploadComponet from './components/IngredientUploadComponent';
import CameraComponent from './components/CameraComponent';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientListContainer from './components/IngredientListContainer';
import apple from './imgs/apple.jpg';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
        {/* <CameraComponent/> */}
{/*      
        <IngredientListContainer ingredients={inred}/> */}
        
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
