import logo from '../imgs/logo_transparent.png';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class LandingPageComponent extends Component {
    render() {
        var leftArrow = "<";
        var rightArrow = ">";
        return (
            <div class="container">
                <div class="left-container">
                    <div class="left">
                        <a class="waves-effect waves-light btn-large"> {leftArrow}</a>
                    </div>
                </div>
                <div class="center-container">
                    <div class="center">
                        <h4>Ingredient Upload</h4>
                    </div>
                </div>
                <div class="right">
                    <a class="waves-effect waves-light btn-large"> {rightArrow}</a>
                </div>
            </div>



        )

    }
}
