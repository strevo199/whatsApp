import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'
import {Link,useLocation}  from 'react-router-dom'
import PresonalChat from './PresonalChat'
import PresonnalchatFooter from '../Footer/PresonnalchatFooter'
import MeduiumChatRoom from './MeduiumChatRoom'
const CahtsBody = () => {
    const {myChats,openChatMenu,handleOnCurrentChat,getCurrentChatUser} = useContext(ChatContext)
    const location =useLocation().pathname

    const lastChat =(props) =>{
        const lasti = myChats[0].chats 
        const lastOneChat = lasti[lasti.length -1]
        return {
            time:lastOneChat.time,
            msg:lastOneChat.msg.slice(0,30)
        }
    }  
    
   const  handlemedAndLagDev = () =>{
        window.addEventListener('resi',(e) =>{
            var newWidth = window.innerWidth;
            
            if (newWidth > '768') {
                setTimeout(() => {
                    document.querySelector('.body').style.height = '87vh'
                    document.querySelector('.footer').classList.replace('flex','hidden')
                    
                }, 50);
            }else{
                setTimeout(() => {
                    document.querySelector('.body').style.height = '75vh'
                    document.querySelector('.footer').classList.replace('hidden','flex')
                    
                }, 50);
            }
        })

        var newWidth = window.innerWidth;
            
            if (newWidth > '768') {
                setTimeout(() => {
                    document.querySelector('.body').style.height = '87vh'
                    document.querySelector('.footer').classList.replace('flex','hidden')
                    
                }, 50);
            }else{
                setTimeout(() => {
                    document.querySelector('.body').style.height = '75vh'
                    document.querySelector('.footer').classList.replace('hidden','flex')
                    
                }, 50);
            }

    }
    handlemedAndLagDev()


    return (
        <div className="flex-1 overflow-y-scroll flex-col flex">
            <div className="md:flex hidden  flex-1 bg-gray-200">
            <ul className="flex-1 flex   justify-around items-center">
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
                            <i class="fa fa-comment text-xl " aria-hidden="false"></i>
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
            
            <div className="flex w-full md:hidden flex-col">
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
                <div className="flex-1 hidden md:flex  ">
                    <div className="w-1/4 h-full medchatlist">
                    {
                    myChats ? (
                <ul className="flex-1 overflow-y-scroll"> 
                    {
                        myChats.map(infro =>(
                            
                            <li onClick ={() =>getCurrentChatUser(infro)} className="flex hover:bg-green-50" key ={infro.id}>
                                    <div className="w-2/12 flex justify-center items-center py-2">
                                        <img className="w-12 h-12 md:w-10 md:h-10 rounded-full cursor-pointer" src={infro.user.user_photo} alt="" />
                                    </div>

                                        <div className="message flex-1 flex py-2 border-b-2 gap-x-3">
                                        <div className="flex flex-col flex-1">
                                            <div className="flex justify-between">
                                                <h1 className="font-bold">{infro.user.user_name}</h1>
                                                <p className="text-gray-500 sm:text-sm text-xs">{lastChat().time}</p>
                                            </div>
                                            <div className="flex items-center gap-x-1 text-gray-500 sm:text-sm text-xs">
                                                <i class="fa fa-check " aria-hidden="false"></i>
                                                <p className=" md:text-sm">{lastChat().msg}...</p>
                                            </div>
                                        </div>
                                     </div>
                                        <i onClick ={() =>openChatMenu(infro)} class="fa fa-chevron-right text-gray-500 cursor-pointer w-1/12 flex items-center" aria-hidden="false"></i>
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
                    <div className="w-9/12 flex h-full flex-col">
                    {
                            handleOnCurrentChat ? 
                            (
                                        <MeduiumChatRoom/>
                            ):
                            (<p className="flex-1 flex font-bold to-green-500 justify-center items-center">Kindly Open a chat</p>)
                        }
                        
                    </div>

                </div>
                
                {
                    myChats ? (
                <ul className="flex-1 md:hidden"> 
                    {
                        myChats.map(infro =>(
                            
                            <li className="flex hover:bg-green-50" key ={infro.id}>
                                    <div className="w-2/12 flex justify-center py-2">
                                        <img className="w-12 h-12 rounded-full cursor-pointer" src={infro.user.user_photo} alt="" />
                                    </div>

                                    <Link to ={`/chat/${infro.id}`} className ="flex-1 flex">
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
                                     </div>
                                    </Link>
                                        <i onClick ={() =>openChatMenu(infro)} class="fa fa-chevron-right text-gray-500 cursor-pointer w-1/12 flex items-center" aria-hidden="false"></i>
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
