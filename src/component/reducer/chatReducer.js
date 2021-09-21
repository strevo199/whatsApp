

const chatReducer =(state,action) =>{
    switch (action.type) {
        case 'CURRENTDM':
            return {
                ...state,
                handleOnCurrentChat: state.myChats.filter(chat => (chat.id === action.payload))[0]
            }
        case 'SHOWCHATMENU':
            document.querySelector('.pmenu').classList.replace('hidden','flex')            
            return{
                ...state,
                showPchatMenu:!state.showPchatMenu,
                handleOnCurrentChat:action.payload
            }
        case 'SHOWFULLIMAGE':
            document.querySelector('.imgInFull').classList.replace('hidden','flex')            
            return{
                ...state,
                ShowMyFullImage:!state.ShowMyFullImage,
            }
        case 'REDUCEFULLIMAGE':
            document.querySelector('.imgInFull').classList.replace('flex','hidden')            
            return{
                ...state,
                ShowMyFullImage:!state.ShowMyFullImage,
            }
            
            case 'CLOSECHATMENU':
            document.querySelector('.pmenu').classList.replace('flex','hidden')            
            return{
                ...state,
                showPchatMenu:!state.showPchatMenu,
            }
            case 'DeLETECHATCONSERVATION':
            return{
                ...state,
                myChats:state.myChats.filter(chat =>(chat !== action.payload))
            }


            case 'HANDLEEDITCONTACTINFO':
                // console.log(action.payload);
                
            return{
                ...state,
                // myChats:{}
            }

            case 'GETCURRENTCHATUSERFORMEDIUMANDLAGDEVICES':
                return{
                    ...state,
                    handleOnCurrentChat:action.payload
                }

            default:
            return state;
    }

}

export default chatReducer