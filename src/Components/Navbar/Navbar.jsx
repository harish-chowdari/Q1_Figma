import React from 'react'
import "./Navbar.css"
import bell_icon from "../../assets/bell_icon.png"
import Button from '../Button/Button'
import tick from "../../assets/accept.png"


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
          <div className='numbers'>
          
          <img src={tick} alt=''/>
            <p className='black-num'>1</p>
            <p className='gery-num'>-------------></p>
            <p className='gery-num'>2</p>
            <p className='gery-num'>-------------></p>
            <p className='gery-num'>3</p>
          </div>
        </div>

    </div>
  )
}

export default Navbar