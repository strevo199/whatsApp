import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Phoneauthnav from './Navs/Phoneauthnav'
import ChatsNav from './Navs/ChatsNav'
import personalChatNav from './Navs/PersonalChatNav'

const NavBar = () => {
    return (
        <div className="navbar flex">
            <Switch>
                <Route path = "/phoneauth" component ={Phoneauthnav} />
                <Route exact path = "/chat" component ={ChatsNav} />
                <Route path = "/chat/:chat_id" component ={personalChatNav} />
            </Switch>
        </div>
    )
}

export default NavBar
