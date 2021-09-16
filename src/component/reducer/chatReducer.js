const chatReducer =(state,action) =>{
    switch (action.type) {
        case 'CURRENTDM':
            return {
                ...state,
                currentlyChatting: state.myChats.filter(chat => (chat.id === action.payload))[0]
            }
    
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }

}

export default chatReducer