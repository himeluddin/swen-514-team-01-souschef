import logo from '../imgs/logo_transparent.png';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IngredientUploadComponent from './IngredientUploadComponent';

    
const MyButton = ({to}) => {
    return ( 
        <a href={`/${to}`}> 
            <button className="my-button"> 
                Take me to {to === '' ? "home" : to} 
            </button> 
        </a> 
    ) 
}

export default class LandingPageComponent extends Component {

    render (){
        
    
        return (
        
        <header>
        <div class="container">
        <img class="center" src={logo}></img>
            <div class="caption left-align">
                <h3>Welcome to Sous Chef!</h3>
                
            </div>
            <div class="container">
            
                <a id="startButton" class="waves-effect waves-light btn-large" href="/IngredientUpload">Get Started</a>
                        
                <script type="text/javascript">
                    document.getElementById("startButton").onclick = true {
                        MyButton(IngredientUploadComponent)
                    };
                </script>
            </div>
        
        </div>
        </header>
    

        )
    }
}



