import React,{useContext} from 'react'
import { useHistory,Link } from 'react-router-dom';
import { ChatContext } from '../../context/ChatContext';

const PersonalChatNav = (props) => {
    const {myChats} = useContext(ChatContext)
    const backToHistory = useHistory()

    const handlepersonalChat =() =>{
        const myid = props.match.params.chat_id
        return myChats.filter(chat => (chat.id === myid))[0]
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
                            <Link to={`/contactinfro/${handlepersonalChat().id}`} className="cursor-pointer">
                                <h1 className="font-bold">{handlepersonalChat().user.user_name}</h1>
                                <p className="text-xs text-gray-500 font-semibold">tap here for contact info</p>
                            </Link>
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
