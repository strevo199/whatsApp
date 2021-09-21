import React,{useContext,useEffect} from 'react'
import '../../AllCss/personnalChat.css'
import { ChatContext } from '../../context/ChatContext'
import { useParams } from 'react-router'


const PresonalChat = () => {
    const {handleOnCurrentChat,hanPerchatInfro} = useContext(ChatContext)
    const params = useParams().chat_id
    useEffect(() => {
        hanPerchatInfro(params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    

    return (
        <div className="flex-1  pchat">
            
        </div>
    )
}

export default PresonalChat
