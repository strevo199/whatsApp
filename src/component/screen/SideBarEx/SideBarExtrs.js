import React from 'react'
import { Route,Switch } from 'react-router-dom'
import PersonnalChatBodyMenu from './PersonnalChatBodyMenu'
import ShowFullImage from './ShowFullImage'

const SideBarExtrs = () => {
    return (
        <div className="flex-1 ">
                <ShowFullImage/>
                <PersonnalChatBodyMenu/>
        </div>
        
    )
}

export default SideBarExtrs
