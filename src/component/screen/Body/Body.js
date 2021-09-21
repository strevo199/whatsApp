import React from 'react'
import {Route,Switch} from 'react-router-dom'
import PhoneAuthBody from './PhoneAuthBody'
import CahtsBody from './CahtsBody'
import presonalChat from './PresonalChat'
import ContactInfroBody from './ContactInfroBody'
import EditContactInfoBody from './EditContactInfoBody'

const Body = () => {
    return (
        <div className="body flex">
            <Switch>
                <Route path = "/phoneauth" component ={PhoneAuthBody} />
                <Route exact path = "/chat" component ={CahtsBody} />
                <Route path = "/chat/:chat_id" component ={presonalChat} />
                <Route path = "/contactinfro/:infro_id" component ={ContactInfroBody} />
                <Route path = "/editcontactinfo/:user_id" component ={EditContactInfoBody} />
            </Switch>
        </div>
    )
}

export default Body
