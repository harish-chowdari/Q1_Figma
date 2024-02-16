import React from 'react'
import "./Navbar.css"
import bell_icon from "../../assets/bell_icon.png"
import Button from '../Button/Button'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-top'>
      <Button 
        button="Complete Profile"
        className="navbar-top-button"
      />
        <img src={bell_icon} alt='bell icon'/>
        </div>

        <div className='navbar-bottom'>
        <p className='navbar-bottom-text'>Choose your new site</p>
        
        </div>

    </div>
  )
}

export default Navbar