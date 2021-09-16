import React,{useContext,useEffect} from 'react'
import { useHistory } from 'react-router';
import { ChatContext } from '../../context/ChatContext';

const PersonalChatNav = (props) => {
    const {myChats} = useContext(ChatContext)
    const backToHistory = useHistory()
    const handlepersonalChat =() =>{
        const id = props.match.params.chat_id
        return myChats.filter(chat => (chat.id === id))[0]
    }


    return (
        <div className="bg-gray-100 flex-1">
             {
                !myChats?(
                    <p>loading</p>
                 ): (
                    <div  className="h-full w-11/12 mx-auto flex items-center justify-between">
                        <i onClick ={() =>backToHistory.push('/chat')} class="fa fa-chevron-left text-blue-600 cursor-pointer text-2xl" aria-hidden="false"></i>
                        <div className="flex gap-x-2 items-center">
                            <img src={handlepersonalChat().user.user_photo} className="rounded-full w-10 h-10" alt="" />
                            <div>
                                <h1 className="font-bold">{handlepersonalChat().user.user_name}</h1>
                                <p className="text-xs text-gray-500 font-semibold">tap here for contact info</p>
                            </div>
                        </div>
                        <i class="fa fa-video text-blue-600 cursor-pointer text-xl" aria-hidden="false"></i>
                        <i class="fa fa-phone text-blue-600 cursor-pointer text-xl" aria-hidden="false"></i>

                    </div>

                )
            }

        </div>
    )
}

export default PersonalChatNav
