import React,{useContext} from 'react'
import { ChatContext } from '../../context/ChatContext'

const ShowFullImage = () => {
    const {reduceFullImge,handleOnCurrentChat} = useContext(ChatContext)

    return (
        <>
        
        {
         handleOnCurrentChat ?
         ( <div   className="imgInFull  bg-opacity-95 hidden z-10 fixed  items-end h-screen bg-black w-screen">
             <img onClick ={reduceFullImge} className="h-full w-full sm:object-contain object-contain" src={handleOnCurrentChat.user.user_photo} alt="" />
         </div>)
     :
     (<p></p>)}
    </>
    )
}

export default ShowFullImage
