import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './component/screen/Routes'
import MainCOntextProvider from './component/context/MainCOntext'
import ChatContextProvider from './component/context/ChatContext';

const App = () => {
  return (
    <BrowserRouter>
    <MainCOntextProvider>
      <ChatContextProvider>
        <div className ="app flex flex-col">
            <Routes/>
        </div>
      </ChatContextProvider>
    </MainCOntextProvider>
    </BrowserRouter>
    
  )
} 

export default App
