import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import apple from '../imgs/apple.jpg';
import IngredientListContainer from "./IngredientListContainer";
import NavBar from "./NavBar";
import AddButton from "./AddButton";
import GenerateRecipeButton from "./GenerateRecipeButton";
import { getContentWithPrefix } from './s3';

//import { listObjs } from './s3';

const IngredientList = () => {
     const [contentList, setContentList] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const sessionKey = sessionStorage.getItem('sessionKey');
                const data = await getContentWithPrefix('post-souschef', sessionKey);
                setContentList(data);
                console.log(data); // this works
                // Extracting the Label values
                const labels = data.map(item => item.Label);
                console.log(labels);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);
    // const sessionkey = sessionStorage.getItem('sessionKey');
    // const params = {
    //     Bucket:'post-souschef',
    //     Prefix: sessionkey
    // };
    // const data = listObjs(params, sessionkey);
    // console.log(data);

    return (
        <div>
            <NavBar pageTitle={"Ingredient List"}/>
            <IngredientListContainer ingredients={contentList ? contentList : []}/>
            <Link to={'/ingredientupload'}>
                <AddButton/>
            </Link>
            <Link to={'/recipes'}>
                <GenerateRecipeButton/>
            </Link>
        </div>
    );
}

export default IngredientList;
