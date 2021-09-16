import React from 'react'
import { Switch,Route,withRouter } from 'react-router-dom'
import ChatFooter from './ChatFooter'

const Footer = () => {


    

    return (
        <div className ="footer flex ">
            <Switch>
                <Route path='/chat' component ={ChatFooter} />
            </Switch>
        </div>
    )
}

export default withRouter(Footer)
