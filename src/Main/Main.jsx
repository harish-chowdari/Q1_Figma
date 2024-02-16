import React from 'react'
import "./Main.css"
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Footer from '../Components/Footer/Footer'
import Scroll from '../Components/Scroll/Scroll'




const Main = () => {
  return (
    <div className='main'>
        <Navbar/>
        <Hero/>
        <Footer/>
        <Scroll/>
    </div>
  )
}

export default Main