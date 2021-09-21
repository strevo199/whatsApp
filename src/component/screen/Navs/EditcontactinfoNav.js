import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ChatContext } from '../../context/ChatContext'

const EditcontactinfoNav = () => {
    const {handleOnCurrentChat} = useContext(ChatContext)

    return (
        <div className="flex-1 justify-center flex">
            <div className="w-11/12 font-bold text-lg sm:text-xl flex justify-between items-center">
                <Link to ={`/contactinfro/${handleOnCurrentChat.user.id}`}><h1  className="text-blue-500">Cancel</h1></Link>
                <h1>Edit Contact</h1>
                <h1 className="opacity-40">Save</h1>
            </div>
        </div>
    )
}

export default EditcontactinfoNav
