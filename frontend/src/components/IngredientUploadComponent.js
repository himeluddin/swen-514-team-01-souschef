import CameraComponent from './CameraComponent'
import NavBar from './NavBar';
import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { getDeletedObjects } from "./s3"; 


const IngredientUploadComponent = () => {
    const location = useLocation();
    const [ingredients, setIngredients] = useState(location.state !== null ? location.state : {});

    /** 
     * retrieves most updated list of deleted ingredients from the s3 file 
    */
    var deletedIngredients = getDeletedObjects(); 

    // checks the value of the retrieved list of deletedIngredients
    for(let k= 0; k < deletedIngredients.length; k++){
        console.log("deleted object from the ingred upload comp method: " +  deletedIngredients[k]); 
    }
    
    return (
        <div>
            <NavBar pageTitle="Ingredient Upload"/> 
            <div class="flex flex-col justify-center items-center pe-px-12">\

                {/* instructions for the user */}
                <h3 className="font-InterExtraLight text-lg text-red-300" >
                    Images should be non-blurry and display one ingredient.
                </h3>
                <br/>
                <h3 className="font-InterExtraLight text-lg text-red-300" >
                Hold still and wait 2 seconds between each picture taken before hitting next!
                </h3>

                {/* pass in the deletedIngredients as a prop */}
                <CameraComponent deletedIngredients={deletedIngredients} ingredients={ingredients} setIngredients={setIngredients}/>
            </div>
        </div>
    );
}

export default IngredientUploadComponent;

