import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import "./App.css"
import Main from './Main/Main'



const App = () => {
  return (
    <div className='app'>
        <Sidebar/>
        <Main/>
    
    </div>
  )
}

export default App