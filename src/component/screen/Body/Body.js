import React from 'react'
import {Route,Switch} from 'react-router-dom'
import PhoneAuthBody from './PhoneAuthBody'
import CahtsBody from './CahtsBody'

const Body = () => {
    return (
        <div className="body flex">
            <Switch>
                <Route path = "/phoneauth" component ={PhoneAuthBody} />
                <Route path = "/chat" component ={CahtsBody} />
            </Switch>
        </div>
    )
}

export default Body
