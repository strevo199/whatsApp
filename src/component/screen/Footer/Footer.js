import React from 'react'
import { Switch,Route,withRouter } from 'react-router-dom'
import ChatFooter from './ChatFooter'
import PresonnalchatFooter from './PresonnalchatFooter'

const Footer = () => {


    

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
