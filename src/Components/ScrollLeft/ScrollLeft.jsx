import React from 'react'
import "./ScrollLeft.css"
import flight from "../../assets/flight-mode.png"
import highway from "../../assets/two-way-street.png"
import map from "../../assets/map.jpg"
import Button from '../Button/Button'

const ScrollLeft = () => {
  return (
    <div className='scroll-left'>
      <div className='sl-left-div'>
        <div className='sl-div-1'>
            <h2>Overview</h2>
            <p>Our AI feature simplifies your 
            life by automating routine tasks. 
            Spend more time on the things you 
            love!Our AI feature simplifies your life 
            by automating routine tasks. Spend more time 
            on the things you love!Our AI feature simplifies 
            your life by automating routine tasks. 
            Spend more time on the things you love.
            </p>
        </div>

        <div className='sl-div-2'>
            <h2>Why ?</h2>
            <p>Our AI feature simplifies your 
            life by automating routine tasks. 
            Spend more time on the things you 
            love!Our AI feature simplifies your life 
            by automating routine tasks. Spend more time 
            on the things you love!Our AI feature simplifies 
            your life by automating routine tasks. 
            Spend more time on the things you love.
            </p>
        </div>

        <div className='sl-div-2'>
            <h2>What ?</h2>
            <p>Our AI feature simplifies your 
            life by automating routine tasks. 
            Spend more time on the things you 
            love!Our AI feature simplifies your life 
            by automating routine tasks. Spend more time 
            on the things you love!Our AI feature simplifies 
            your life by automating routine tasks. 
            Spend more time on the things you love.
            </p>
        </div>

        <div className='sl-div-land'>

            <h2>Landmarks</h2>
            <div className='flight-div'>
                <div className='flight-div-img'>
                    <img src={flight} alt='' />
                    <h3>Airport</h3>
                </div>

                <div className='flight-div-text'>
                    
                    <h3>100 km</h3>
                    <p>Airport 1</p>
                </div>

            </div>

            <div className='flight-div'>
                <div className='flight-div-img'>
                    <img src={flight} alt='' />
                    <h3>Airport</h3>
                </div>

                <div className='flight-div-text'>
                    
                    <h3>25 km</h3>
                    <p>Green Terminal</p>
                </div>

            </div>

            <div className='highway-div'>
                <div className='highway-div-img'>
                    <img src={highway} alt='' />
                    <h3>Highway</h3>
                </div>

                <div className='highway-div-text'>
                    
                    <h3>100 km</h3>
                    <p>Highway number 5</p>
                </div>

            </div>

        </div>

        <div className='map-div'>
            <h2>Map</h2>
            <img src={map} alt='' />
            <Button 
                className="map-button"
                button="Schedule a call >"
            />
        </div>

        


      </div>
    </div>
  )
}

export default ScrollLeft