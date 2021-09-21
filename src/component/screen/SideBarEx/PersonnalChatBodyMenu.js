import React,{useContext} from 'react'
import { useHistory } from 'react-router'
import { ChatContext } from '../../context/ChatContext'

const PersonnalChatBodyMenu = () => {
    const {closeChatMenu,deleteChatConservation,handleOnCurrentChat,clearChatConservation} = useContext(ChatContext)
    const history = useHistory()
    
    const goToContactInfo =() =>{
        history.push(`/contactinfro/${handleOnCurrentChat.user.user_id}`)
        closeChatMenu()
    }

    return (
        <div className="pmenu hidden bg-opacity-50 fixed items-end h-screen bg-gray-600 w-screen">
            <div className="w-11/12 h-4/6 flex flex-col justify-evenly  mx-auto rounded-3xl">
                <ul className=" rounded-3xl flex-col gap-y-0.5 flex w-full h-4/6">
                    <li className="bg-gray-200 hover:bg-gray-50 cursor-pointer   flex items-center justify-center text-2xl rounded-t-2xl font-semibold text-blue-500 flex-1"><h1>Mute</h1></li>
                    <li onClick ={goToContactInfo} className="bg-gray-200  hover:bg-gray-50 cursor-pointer flex items-center justify-center text-2xl font-semibold text-blue-500 flex-1"><h1>Contact Info</h1></li>
                    <li className="bg-gray-200  hover:bg-gray-50 cursor-pointer flex items-center justify-center text-2xl font-semibold text-blue-500 flex-1"><h1>Export Chat</h1></li>
                    <li onClick ={clearChatConservation} className="bg-gray-200  hover:bg-gray-50 cursor-pointer flex items-center justify-center text-2xl font-semibold text-blue-500 flex-1"><h1>Clear Chat</h1></li>
                    <li onClick ={deleteChatConservation} className="bg-gray-200 hover:bg-gray-50 cursor-pointer  flex items-center justify-center text-2xl rounded-b-2xl font-semibold text-red-600 flex-1"><h1>Delete Chat</h1></li>
                </ul>

                <button onClick ={closeChatMenu} className="focus:outline-none hover:bg-gray-100 w-full h-1/6 rounded-2xl text-2xl font-semibold text-blue-500 bg-white"> Cancel</button>
            </div>
        </div>
    )
}

export default PersonnalChatBodyMenu
