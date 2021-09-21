import React,{useContext} from 'react'
import { useHistory,Link } from 'react-router-dom'
import { ChatContext } from '../../context/ChatContext'

const ContactInfroNav = () => {
    const backTopchat = useHistory()
    const {handleOnCurrentChat} = useContext(ChatContext)

    return (
        <div className ="flex-1 flex justify-center bg-gray-100">
            {
                handleOnCurrentChat ? 
                ( 
                <div className="w-11/12 h-full justify-between flex items-center">
                    <div className="flex flex-1 items-center gap-x-1">
                    <i onClick ={() =>backTopchat.push(`/chat/${handleOnCurrentChat.id}`)} class="fa fa-chevron-left text-blue-500 cursor-pointer text-2xl" aria-hidden="false"></i>
                    <h1 className="capitalize font-semibold text-blue-500">{handleOnCurrentChat.user.user_name}</h1>
                    </div>
                    <h1 className="flex flex-1 font-semibold">Contact Info</h1>
                    <Link to ={`/editcontactinfo/${handleOnCurrentChat.id}`} className="flex flex-1 cursor-pointer font-bold text-blue-500 justify-end">Edit</Link>
                </div>):
            (<p>loading...</p>)
            }
        </div>
    )
}

export default ContactInfroNav
