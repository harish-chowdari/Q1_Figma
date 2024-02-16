import React from 'react'
import "./Sidebar.css"
import ball from "../../assets/ball.png"



const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-img-div'><img  src={ball} alt='img' /></div>
        
        <div className='text-div'><p>Cart</p></div>
        <div className='text-bold-div'><p className='text-bold'>Market</p></div>
        <div className='text-div'><p>Settings</p></div>
        <div className='text-div'><p>Logout</p></div>
        
        <div className='empty'><p></p></div>

        
    </div>
  )
}

export default Sidebar