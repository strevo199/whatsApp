import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './component/screen/Routes'
import MainCOntextProvider from './component/context/MainCOntext'

const App = () => {
  return (
    <BrowserRouter>
    <MainCOntextProvider>
        <div className ="app flex flex-col">
            <Routes/>
        </div>
    </MainCOntextProvider>
    </BrowserRouter>
    
  )
} 

export default App
