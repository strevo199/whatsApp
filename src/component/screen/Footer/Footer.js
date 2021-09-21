import React from 'react'
import { Switch,Route,useLocation,useParams,withRouter } from 'react-router-dom'
import ChatFooter from './ChatFooter'
import PresonnalchatFooter from './PresonnalchatFooter'

const Footer = (props) => {

    const location = useLocation()
    const params = useParams()

    // const id = params
    console.log(location);
    const checkForFooter = () =>{


        if (location.pathname ==='/phoneauth' || location.pathname.split('/')[1] === 'contactinfro') {
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
    checkForFooter()
    

    return (
        <div className ="footer flex ">
            <Switch>
                <Route exact path='/chat' component ={ChatFooter} />
                <Route path='/chat/:chat_id' component ={PresonnalchatFooter} />
            </Switch>
        </div>
    )
}

export default withRouter(Footer)
