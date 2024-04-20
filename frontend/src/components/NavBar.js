import { Link } from "react-router-dom";
import { endSession } from "./aws/s3";

function NavBar({ pageTitle, showBackButton = false, showCloseButton = false, backLink = '' }) {
    const back = "<";
    const close = "x";
    const sessionKey = sessionStorage.getItem("sessionKey");

    return (
        <div>
            <div className="pt-10 p1-10 pr-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row">
                        <div className="flex-none items-center justify-center pr-40">
                            <Link to={backLink}>
                                {showBackButton ?
                                    (<button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            {back}
                                        </span>
                                    </button>) : null
                                }
                            </Link>
                        </div>
                        <div className="flex-grow items-center justify-center">
                            <h3 className="font-InterExtraLight text-4xl">{pageTitle}</h3>
                        </div>
                        <div className="flex-none items-center justify-center pl-40">
                            {showCloseButton ?
                                (
                                    <Link to={'/'}>
                                        <button onClick={() => endSession(sessionKey)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                {close}
                                            </span>
                                        </button>
                                    </Link>

                                ) : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
        </div>
    )
}

export default NavBar;