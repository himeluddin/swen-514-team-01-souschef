/**
 * Modal that pops up when user wants to edit fields for their food items 
 */
import React, { useImperativeHandle, useState, forwardRef } from "react";
import close from '../imgs/close.png'
import {updateLabel} from './s3';

function updateIngredientLabel(photo, updatedLabel) {
    // what information do we need to update a label? 
    
    // need to parse the image name for the key which is after the last back slash
    // this should be called after you have set the currentPhoto with  
    console.log("photo url edit modal: " + photo); 
    var img_key = photo.image_url.split("/"); // the third one should be the back end of key 
    console.log(img_key);
    updateLabel(sessionStorage.getItem("sessionKey"), img_key, updatedLabel); // need to see how to get that user input
    /**
     * ()
     * current bucket name  (dont need this anymore )
     * session key 
     * imageName (which is the key)
     * updated label name 
     * in order to make the request 
    */
}
const EditModal = forwardRef((props, ref) => {
    const [showModal, setShowModal] = useState(false);

    useImperativeHandle(ref, () => ({
        openModal() {
            setShowModal(true);
        }
    }))

    var currentPhoto = props.image_url; // gets the photo from the passed in properties? 
    return (
        <>
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                <h3 className="text-3xl font=semibold">Edit Name</h3>
                                <button onClick={() => setShowModal(false)} className="static bg-transparent p-0 border-0 text-black float-right">
                                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                                        <img src={close} alt="Close"></img>
                                    </span>
                                </button>
                            </div>
                            {/* shows the current photo of ingredient youre editing */}
                            <div className="relative p-6 flex-auto">
                                <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                                    <div class="p-3 px-10 max-w-sm w-full lg:max-w-full lg:flex">
                                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" title="Woman holding a mug">
                                            <img src={currentPhoto} alt="help"></img>
                                        </div>
                                    </div>
                                    <div class="flex flex-row">
                                        <input placeholder="Edit..." class="flex flex-col shadow appearance-none border rounded w-full py-2 px-4 text-black" />
                                    </div>
                                </form>
                            </div>
                            {/* buttons in the modal  */}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <button onClick={() => setShowModal(false)} type="button" className="static text-gray-400 border-solid border-gray-400 rounded px-6 py-3 text-sm outline-none focus:outline-none mr-1 ease-in duration-75 hover:bg-gray-400 hover:text-white">
                                    Close
                                </button>
                                {/* want to insert another function on click as well, how to do that?
                                
                                    perhaps just grabs from input element 
                                    or
                                    we could use a react form (once we click submit the form will describe information we need to grab)
                                */}
                                <button onClick={() => {setShowModal(false); updateIngredientLabel(currentPhoto, "temporary"); }} class="static inline-flex p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                    <span class="static px-6 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Submit
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
})

export { EditModal };