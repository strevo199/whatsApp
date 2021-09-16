import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Phoneauthnav from './Navs/Phoneauthnav'
import ChatsNav from './Navs/ChatsNav'

const NavBar = () => {
    return (
        <div className="navbar flex">
            <Switch>
                <Route path = "/phoneauth" component ={Phoneauthnav} />
                <Route path = "/chat" component ={ChatsNav} />
            </Switch>
        </div>
    )
}

export default NavBar
