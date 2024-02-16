import React from 'react'
import "./Hero.css"
import land from "../../assets/land.jpg"


const Hero = () => {
  return (
    <div className='hero'>

        <div className='hero-top'>
            <p>jMarket > </p>
            <p>Category1 > </p>
            <p>Theme park site > </p>
        </div>

        <div className='hero-middle'>
            <img className='land-img' src={land} alt='land' />
        </div>

       



    
    </div>
  )
}

export default Hero