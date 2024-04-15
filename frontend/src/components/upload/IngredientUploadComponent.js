import CameraComponent from './CameraComponent'
import NavBar from '../NavBar';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const IngredientUploadComponent = () => {
    const location = useLocation();
    const [ingredients, setIngredients] = useState(location.state !== null ? location.state : {});
    
    return (
        <div>
            <NavBar pageTitle="Ingredient Upload"/> 
            <div className="flex flex-col justify-center items-center pe-px-12">
                {/* instructions for the user */}
                <h3 className="font-InterExtraLight text-lg text-red-300">
                    Images should be non-blurry and display one ingredient.
                </h3>
                <br/>
                <h3 className="font-InterExtraLight text-lg text-red-300" >
                    Hold still and wait 5 seconds between each picture taken before hitting next!
                </h3>
                {/* pass in the deletedIngredients as a prop */}
                <CameraComponent ingredients={ingredients} setIngredients={setIngredients}/>
            </div>
        </div>
    );
}

export default IngredientUploadComponent;

