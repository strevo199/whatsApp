import React from 'react';
import {BrowserRouter,Switch} from 'react-router-dom'
import Routes from './component/screen/Routes'
import MainCOntextProvider from './component/context/MainCOntext'
import ChatContextProvider from './component/context/ChatContext';
import SideBarExtrs from './component/screen/SideBarEx/SideBarExtrs';

const App = () => {

  

  return (
    <BrowserRouter>
    <MainCOntextProvider>
      <ChatContextProvider>
        <div className ="app flex flex-col">
            <SideBarExtrs/>
            <Routes/>
        </div>
      </ChatContextProvider>
    </MainCOntextProvider>
    </BrowserRouter>
    
  )
} 

export default App
