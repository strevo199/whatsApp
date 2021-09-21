import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext';
import {Link} from 'react-router-dom'


const ContactInfroBody = () => {
    const {handleOnCurrentChat,showFullImage} = useContext(ChatContext)
    return ( 
        <div className="flex-1 flex">
            {
            handleOnCurrentChat ? 
            (
                <div className="flex-1 flex flex-col ">
                        <img onDoubleClick ={showFullImage} className="h-3/6 object-cover w-full hover:opacity-100 opacity-90" src={handleOnCurrentChat.user.user_photo} alt="" />
                        <div className="bg-gray-200 gap-y-3 flex-1 flex-col flex">
                            <div className="bg-white flex-col items-end flex-1 flex justify-end gap-y-3">
                                <div className="flex w-11/12 border-b-2 ">
                                    <div className="flex-1">
                                        <h1 className="text-2xl font-semibold capitalize">{handleOnCurrentChat.user.user_name}</h1>
                                        <h1 className="text-sm text-gray-500">{handleOnCurrentChat.user.user_phoneNumber}</h1>
                                    </div>
                                    <div className=" flex items-center justify-evenly flex-1">
                                        <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-comment text-blue-500 cursor-pointer text-2xl" aria-hidden="false"></i></Link>
                                        <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-video text-blue-500 cursor-pointer text-2xl" aria-hidden="false"></i></Link>
                                        <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-phone text-blue-500 cursor-pointer text-2xl" aria-hidden="false"></i></Link>
                                    </div>
                                </div>
                                <div className="flex w-11/12 ">
                                    <div className="flex-1">
                                        <p className="text-lg font-semibold capitalize">{handleOnCurrentChat.user.user_about.msg}</p>
                                        <p className="text-sm text-gray-500">{handleOnCurrentChat.user.user_about.time_updated}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="bg-white border-t-2 border-b-2 border-gray-200 flex-col items-end flex-1 flex justify-end">
                            
                                <div className="flex w-11/12 justify-between  h-full items-center">
                                    <div className="w-1/6 flex items-center  h-full">
                                        <i class="fa fa-star text-white items-center bg-red-600 rounded-lg  cursor-pointer text-xl w-3/6 flex justify-center h-4/5 " aria-hidden="false"></i>
                                    </div>                                    
                                    <div className="w-10/12 h-full  flex border-b-2">
                                        <div className="w-10/12 h-full flex justify-between items-center ">
                                            <h1 className="text-xl font-semibold capitalize">Starred Message</h1>
                                            <div className="flex justify-end text-gray-500 items-center gap-x-2  w-2/6">
                                                <h1 className="font-bold ">None</h1>
                                                <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-chevron-right items-center cursor-pointer text-xl" aria-hidden="false"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex w-11/12 justify-between  h-full items-center">
                                    <div className="w-1/6 flex items-center  h-full">
                                        <i class="fa fa-search text-white items-center bg-yellow-400 rounded-lg  cursor-pointer text-xl w-3/6 flex justify-center h-4/5 " aria-hidden="false"></i>
                                    </div>                                    
                                    <div className="w-10/12 h-full  flex ">
                                        <div className="w-10/12 h-full flex justify-between items-center ">
                                            <h1 className="text-xl font-semibold capitalize">Chat search</h1>
                                            <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-chevron-right text-gray-500 items-center cursor-pointer text-xl" aria-hidden="false"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="bg-white border-t-2 border-b-2 border-gray-200 flex-col items-end  flex justify-end">
                                <div className="flex w-11/12 justify-between  h-full items-center">
                                    <div className="w-1/6 flex items-center  h-full">
                                        <i class="fa fa-volume-up text-white items-center bg-green-600 rounded-lg  cursor-pointer text-xl w-3/6 flex justify-center h-4/5 " aria-hidden="false"></i>
                                    </div>                                    
                                    <div className="w-10/12 h-full  flex ">
                                        <div className="w-10/12 h-full flex justify-between items-center ">
                                            <h1 className="text-xl flex-1 font-semibold capitalize">Mute</h1>
                                            <div className="flex justify-end text-gray-500 items-center gap-x-2  w-2/6">
                                                <h1 className="font-bold ">No</h1>
                                                <Link to = {`/chat/${handleOnCurrentChat.id}`}><i class="fa fa-chevron-right items-center cursor-pointer text-xl" aria-hidden="false"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
            ):
            (<p>loading</p>)
        }
        </div>
    )
}

export default ContactInfroBody
