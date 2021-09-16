import React from 'react'
import {Route,Switch} from 'react-router-dom'
import PhoneAuthBody from './PhoneAuthBody'
import CahtsBody from './CahtsBody'
import presonalChat from './PresonalChat'

const Body = () => {
    return (
        <div className="body flex">
            <Switch>
                <Route path = "/phoneauth" component ={PhoneAuthBody} />
                <Route exact path = "/chat" component ={CahtsBody} />
                <Route path = "/chat/:chat_id" component ={presonalChat} />
            </Switch>
        </div>
    )
}

export default Body
