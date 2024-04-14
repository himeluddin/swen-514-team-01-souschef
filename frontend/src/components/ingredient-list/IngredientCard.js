import close from '../../imgs/close.png'
import '../../css/CameraComponent.css'
import { useRef } from 'react';
import { EditModal } from './EditModal';

function IngredientCard({ ingredient, editLabel, removeCard }) {
    const editModalRef = useRef();

    const onCloseClick = () => {
        removeCard(ingredient);
    }

    return (
        <div className="p-3 px-10 w-full">
            <div className="shadow-lg max-w-sm lg:max-w-full lg:flex">
                <div className="h-60 lg:h-auto lg:w-60 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden">
                    <img src={ingredient.image_url} alt={ingredient.label}></img>
                </div>
                <div className="w-full border border-gray-400 lg:border-gray-400 bg-white rounded-tr rounded-br p-4 flex flex-col justify-between leading-normal">
                        <div className="flex items-center card-button">
                            <button onClick={onCloseClick} className="h-12 w-12 p-0 static transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                <img src={close} alt="Close Button"></img>
                            </button>
                        </div>
                    <div className="text-gray-900 font-bold text-4xl">
                        {ingredient.label}
                    </div>
                    <div className="flex items-center card-button">
                        <button onClick={() => editModalRef.current.openModal()} className="static card-button inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                            <span className="static px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Edit
                            </span>
                        </button>
                        <EditModal ingredient={ingredient} editLabel={editLabel} ref={editModalRef}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngredientCard; 