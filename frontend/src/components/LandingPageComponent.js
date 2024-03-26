import logo from '../imgs/logo_transparent.png';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import IngredientUploadComponent from './IngredientUploadComponent';
import { useNavigate } from  'react-router-dom'; 
import TestComponent from './TestComponent';


const LandingPageComponent = () => {
    const navigate = useNavigate(); 
    
    return (

        <div> 
        <div class="pl-4 pr-4">
        <div class="flex flex-col justify-center items-center">
            <div class="flex items-center justify-center">
                <img  src={logo}></img>
            </div>
        
            <h3 className="font-InterExtraLight text-5xl">Welcome to SousChef</h3>
            <div className=" p-10">
            <Link to={'/ingredientupload'}>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get Started
                    </span>
                </button>
            </Link>
            </div>
        </div>
        </div>
        </div>

    );
};

export default LandingPageComponent; 
// export default class LandingPageComponent extends Component {

//     render (){
        
    
//         return (
        
//         <header>
//         <div class="container">
//         <img class="center" src={logo}></img>
//             <div class="caption left-align">
//                 <h3>Welcome to Sous Chef!</h3>
                
//             </div>
//             <div class="container">
//                 <div class="center">
//                 <Router> 
//                 <Link to='/IngredientUpload'>
//                 <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
//                 </Link>
//                 <Routes>
//                     <Route path="/IngredientUpload" element={<IngredientUploadComponent />} />
//                 </Routes>
//                 </Router>
//             </div>
//             </div>
        
//         </div>

//         </header>
    

//         )
//     }
// }



