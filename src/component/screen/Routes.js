import React from 'react'
import NavBar from './NavBar'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import '../AllCss/route.css'

const Routes = () => {
    return (
        <div className ="route">
            <NavBar/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Routes
