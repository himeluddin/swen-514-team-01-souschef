import logo from '../imgs/logo_transparent.png';
import React, {Component} from 'react';
import '../css/LandingPageComponent.css'
export default class LandingPageComponent extends Component {
    
    

    render (){

        return (
        <body>
        <img class="center" src={logo}></img>
        <div class="caption left-align">
            <h3>Welcome to Sous Chef</h3>
            <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
        </body>

        )
    }
}