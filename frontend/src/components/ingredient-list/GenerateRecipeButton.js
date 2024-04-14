import '../../css/CameraComponent.css'

function GenerateRecipeButton() {
    return (
        <div className="sticky p-3 px-10 bottom-0 bg-slate-300">
            <button className="static justify-center inline-flex p-1 w-full overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span className="static w-full h-12 px-5 py-2 text-2xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Generate Recipe
                </span>
            </button>
        </div> 
    );
}
export default GenerateRecipeButton; 