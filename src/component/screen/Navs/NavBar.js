import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Phoneauthnav from './Phoneauthnav'
import ChatsNav from './ChatsNav'
import personalChatNav from './PersonalChatNav'
import ContactInfroNav from './ContactInfroNav'
import EditcontactinfoNav from './EditcontactinfoNav'

const NavBar = () => {
    return (
        <div className="navbar flex">
            <Switch>
                <Route path = "/phoneauth" component ={Phoneauthnav} />
                <Route exact path = "/chat" component ={ChatsNav} />
                <Route path = "/chat/:chat_id" component ={personalChatNav} />
                <Route path = "/contactinfro/:infro_id" component ={ContactInfroNav} />
                <Route path = "/editcontactinfo/:user_id" component ={EditcontactinfoNav} />
            </Switch>
        </div>
    )
}

export default NavBar
