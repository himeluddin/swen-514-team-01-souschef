import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import apple from '../imgs/apple.jpg';
import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getIngredients } from "./s3";
const AWS = require('aws-sdk');

const s3Client = new S3Client({ region: "us-east-1" });


// replace this with when you pull from s3 bucket
// get the ingredients from the s3 bucket using boto3
// spin up a new card every it pulls from s3 buckets and sees new options
// (API PEOPLE)
//****edit this***///
//populate with recipes 
const raw_data = '';
//****edit this***///


const ingred = [
    { id: 1, title: "apple", url: apple },
    { id: 2, ingredient: "Apple2", ingredientUrl: "../imgs/apple.jpg" },
    { id: 3, ingredient: "Apple3", ingredientUrl: "../imgs/apple.jpg" }
]


function IngredientList() {

    console.log("ingredients list pre call session id: ,", sessionStorage.getItem("sessionKey"))
    getIngredients("post-souschef", sessionStorage.getItem("sessionKey"));
    console.log("ingredients list post call session id: ,", sessionStorage.getItem("sessionKey"));

    return (
        // put nav bar up here
        <div>
            <NavBar pageTitle={"Ingredient List"} />
            <IngredientListContainer ingredients={ingred} />

            <Link to={'/ingredientupload'}>
                <AddButton />
            </Link>
            <Link to={'/recipes'}>
                <GenerateRecipeButton />
            </Link>
        </div>
    );
}
export default IngredientList; 