import React from "react";


function Recipe({ingredient}) {
    var back = "<";
    var forward = ">";


    return (
        <div className={"h-screen "}>

            {/*nav bar*/}
            <div className="w-full">
                <div className="flex flex-col justify-center items-center py-7">
                    <div className="flex flex-row">
                        <div className="flex-none items-center justify-center pr-40">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {back}
                                </span>
                            </button>
                        </div>
                        <div className="flex-grow items-center justify-center">
                            <h3 className="font-InterExtraLight text-4xl">Generated Recipes</h3>
                        </div>
                        <div className="flex-none items-center justify-center pl-40">
                            <button
                                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                <span
                                    className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {forward}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Generate All Recipe button*/}


            <div className="  flex flex-col space-y-4  items-center w-full h-full ">
                <div className={"w-1/2 h-1/4 shadow-md border-black border-2 pr-4"}>
                    <div className="font-bold text-xl mb-2 pl-5">Ingredients</div>
                    <ul className="list-disc pl-12">
                        {ingredient.ingredent_list.map((i) => <li>{i}</li>)}
                        </ul>
                </div>
                <div className={"w-1/2 h-1/4 shadow-md border-black border-2 "}>
                    <div className="font-bold text-xl mb-2 pl-5">Instructions</div>
                    <ul className="list-decimal pl-12">
                        {ingredient.instruction_list.map((i) => <li>{i}</li>)}
                    </ul>
                </div>

            </div>
        </div>


    );


}

export default Recipe;