import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import {Link}  from 'react-router-dom'
const CahtsBody = () => {
    const {myChats} = useContext(ChatContext)
    
 
    const lastChat =() =>{
        const lasti = myChats[0].chats 
        const lastOneChat = lasti[lasti.length -1]
        return {
            time:lastOneChat.time,
            msg:lastOneChat.msg.slice(0,30)
        }
    } 

    return (
        <div className="flex-1 overflow-y-scroll flex-col flex">
            
            <div className="flex w-full flex-col">
                <div className="text-blue-500 items-center font-semibold flex justify-between h-8 w-11/12 mx-auto">
                    <h1>Broadcast Lists</h1>
                    <h1>New Group</h1>
                </div>
                <div className="flex h-16 w-full justify-between">
                    <div className="flex-1 flex justify-between items-center">
                        <div className="text-sm flex-1">
                            <h1 className="font-bold">Stephen lala</h1>
                            <p className="text-gray-500">i am a fine boy</p>
                        </div>
                        <div className="flex text-sm text-gray-500 justify-center  gap-x-3 flex-1">
                            <h1 >11/19/19</h1>
                            <i class="fa fa-chevron-right " aria-hidden="false"></i>
                        </div>

                    </div>
                    <div className ="flex justify-between flex-1">
                        <div className="flex-1 flex flex-col items-center justify-center text-white bg-gray-400">
                            <i class="fa fa-ellipsis-h  text-xl" aria-hidden="false"></i>
                            <h1>More</h1>
                        </div>
                        <div className="flex-1 flex flex-col items-center justify-center text-white bg-blue-900 bg-opacity-80">
                            <i class="fa fa-archive text-xl " aria-hidden="false"></i>
                            <h1>Archive</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex-1 flex bg-gray-50">
                {
                    myChats ? (
                <ul className="flex-1 "> 
                    {
                        myChats.map(infro =>(
                            
                            <li className="flex hover:bg-green-50" key ={infro.id}>
                                <Link to ={`/chat/${infro.id}`} className ="flex-1 flex">
                                    <div className="w-2/12 flex justify-center py-2">
                                        <img className="w-12 h-12 rounded-full" src={infro.user.user_photo} alt="" />
                                    </div>
                                    <div className="message flex-1 flex py-2 border-b-2 gap-x-3">
                                        <div className="flex flex-col flex-1">
                                            <div className="flex justify-between">
                                                <h1 className="font-bold">{infro.user.user_name}</h1>
                                                <p className="text-gray-500 sm:text-sm text-xs">{lastChat().time}</p>
                                            </div>
                                            <div className="flex items-center gap-x-1 text-gray-500 sm:text-sm text-xs">
                                                <i class="fa fa-check " aria-hidden="false"></i>
                                                <p className=" ">{lastChat().msg}...</p>
                                            </div>
                                        </div>
                                        <i class="fa fa-chevron-right text-gray-500 cursor-pointer w-1/12 flex items-center" aria-hidden="false"></i>
                                    </div>
                                </Link>
                            </li>
                            
                        ))
                    }
                </ul>

                    ):(
                        <div className="flex-1 flex flex-col justify-center items-center text-gray-500">
                            <p>No Chat avaliable</p>
                            <p>Clich here to start a CHAT</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CahtsBody
