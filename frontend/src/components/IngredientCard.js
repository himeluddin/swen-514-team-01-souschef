import apple from '../imgs/apple.jpg'
import close from '../imgs/close.png'
import '../css/CameraComponent.css'
import { useRef } from 'react';
import { EditModal } from './EditModal';

function IngredientCard() {
    const editModalRef = useRef()

    return (
        <div>
            <div class="p-3 px-10 max-w-sm w-full lg:max-w-full lg:flex">
                <div class="h-60 lg:h-auto lg:w-60 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" title="Woman holding a mug">
                    <img src={apple} alt="help"></img>
                </div>
                <div class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded-tr rounded-br p-4 flex flex-col justify-between leading-normal">
                        <div class="flex items-center card-button">
                            <button class="h-12 w-12 p-0 static transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img src={close} alt="Close Button"></img>
                            </button>
                        </div>
                    <div class="text-gray-900 font-bold text-4xl">Apple</div>
                    <div class="flex items-center card-button">
                        <button onClick={() => editModalRef.current.openModal()} class="static card-button inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span class="static px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Edit
                            </span>
                        </button>
                        <EditModal ref={editModalRef}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IngredientCard; 