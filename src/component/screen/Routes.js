import React from 'react'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import '../AllCss/route.css'
import NavBar from './Navs/NavBar'
import { withRouter } from 'react-router'

const Routes = (props) => {

    const changePathForNowDev = () =>{
        if (props.location.pathname === '/') {
            props.history.push('/phoneauth')
        }
        if (props.location.pathname === '/phoneauth') {
            setTimeout(() => {
                props.history.push('/chat')
            }, 5000);
        }

    }
    changePathForNowDev()

    return (
        <div className ="route">
            
            <NavBar/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default withRouter(Routes)
