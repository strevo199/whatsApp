import React from 'react'
import {Link,useLocation} from 'react-router-dom';

const ChatFooter = () => {
    const location =useLocation().pathname
    console.log(location);
    return (
        <div className="flex-1 flex bg-gray-200">
            <ul className="flex-1 flex  justify-around items-center">
                <li className="">
                    <Link to ="/status" className={location === '/status'? "font-bold text-blue-700":"hover:font-bold hover:text-blue-700"}>
                        <div className="flex flex-col items-center justify-center">
                            <i class="fa fa-spinner text-xl " aria-hidden="false"></i>
                            <h1 className="text-xs" >Status</h1>
                        </div>
                    </Link>
                </li>
                <li className="">
                    <Link to ='/phone' className={location === '/phone'? "font-bold text-blue-700":"hover:font-bold hover:text-blue-700"}>
                        <div className="flex flex-col items-center justify-center">
                            <i class="fa fa-phone text-xl " aria-hidden="false"></i>
                            <h1 className="text-xs">Calls</h1>
                        </div>
                    </Link>
                </li>
                <li className="">
                    <Link to ='/camera' className={location === '/camera'? "font-bold text-blue-700":"hover:font-bold hover:text-blue-700"}>
                        <div className="flex flex-col items-center justify-center">
                            <i class="fa fa-camera text-xl " aria-hidden="false"></i>
                            <h1 className="text-xs">Camera</h1>
                        </div>
                    </Link>
                </li>
                <li className="">
                    <Link to ='/chat' className={location === '/chat'? "font-bold text-blue-700":"hover:font-bold hover:text-blue-700"}>
                        <div className="flex flex-col items-center justify-center">
                            <i class="fa fa-comments text-xl " aria-hidden="false"></i>
                            <h1 className="text-xs">Chats</h1>
                        </div>
                    </Link>
                </li>
                <li className="">
                    <Link to='/settings' className={location === '/settings'? "font-bold text-blue-700":"hover:font-bold hover:text-blue-700"}>
                        <div className="flex flex-col items-center justify-center">
                            <i class="fa fa-cog text-xl " aria-hidden="false"></i>
                            <h1 className="text-xs">Settings</h1>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ChatFooter
