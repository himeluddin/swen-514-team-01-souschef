import logo from './logo.svg';
import './App.css';
import {FaArrowLeft} from "react-icons/fa";

import { GoX } from "react-icons/go";
function RecipeView() {
    return (
        <div>
            <button><FaArrowLeft onClick={console.log("hi")}/></button>
            <button><GoX  onClick={console.log("hi")}/></button>


            <h4 class="text-2xl font-bold dark:text-black">Apple Pie</h4>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>


            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
        </div>


    );


}

export default RecipeView;
