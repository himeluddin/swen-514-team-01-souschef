import add from '../imgs/add.png'
import '../css/CameraComponent.css'

function AddButton() {
    return (
        <div class="p-3 px-10">
            <button class="static justify-center inline-flex p-0.5 w-full overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <img src={add} alt="Add" class="h-24"></img>
            </button>
        </div>  
    );
}
export default AddButton; 