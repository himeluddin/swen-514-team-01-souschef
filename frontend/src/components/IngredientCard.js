import close from '../imgs/close.png'
import '../css/CameraComponent.css'
import { useRef, useState } from 'react';
import { EditModal } from './EditModal';
import {deleteObject} from './s3';

function IngredientCard({ ingredientInfo, removeCard }) {
    const [showCard, setShowCard] = useState(true);

    const editModalRef = useRef();

    // get the image name from the url passed from the e.g. sessionkey_01.jpg 
    // this is retrieved from the Ingredient List Container component from ingredientInfo
    const imageKey = ingredientInfo.image_url.split("/")[3];
    console.log("imgkey: "+ imageKey); 

    return (
        showCard ?
        (<div class="p-3 px-10 w-full">
            <div class="shadow-lg max-w-sm lg:max-w-full lg:flex">
                <div class="h-60 lg:h-auto lg:w-60 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden">
                    {/* shows the ingred image on the card */}
                    <img src={ingredientInfo.image_url} alt={ingredientInfo.name}></img>
                </div>
                <div class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded-tr rounded-br p-4 flex flex-col justify-between leading-normal">
                        <div class="flex items-center card-button">
                            {/* makes the card go away after being clicked, deletes the object from the s3 bucket as well */}
                            <button onClick={() => {deleteObject(imageKey); setShowCard(false);}} class="h-12 w-12 p-0 static transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img src={close} alt="Close Button"></img>
                            </button>
                        </div>
                    <div class="text-gray-900 font-bold text-4xl">{ingredientInfo.label}</div>
                    <div class="flex items-center card-button">
                        {/* opens up the edit modal for the user to edit their label */}
                        <button onClick={() => editModalRef.current.openModal()} class="static card-button inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="static px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Edit
                            </span>
                        </button>
                        <EditModal {...ingredientInfo} ref={editModalRef}/>
                    </div>
                </div>
            </div>
        </div>) : null
    );
}

export default IngredientCard; 