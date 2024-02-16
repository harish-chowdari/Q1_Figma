import React from 'react'
import "./Footer.css"
import Button from "../Button/Button"
import placeholder from "../../assets/placeholder.png"
import tractor from "../../assets/tractor.png"
import arrow from "../../assets/next.png"


const Footer = () => {
  return (
    <div className='footer'>
        
        <div className='footer-top-left'>
            <h2 className='footer-title'>Theme Park Site</h2>
          <div className='location-footer'>
            <img src={placeholder} alt='icon location'></img>
            <p>Address Of the site</p>
          </div>
        <div className='icons-footer'>
          <div className='adult'>
            <img src={tractor} alt='' />
            <p>Adult rides</p>
          </div>

          <div className='adult'>
            <img src={tractor} alt='' />
            <p>Family rides</p>
          </div>

          <div className='adult'>
            <img src={tractor} alt='' />
            <p>Restaurants</p>
          </div>

          <div className='adult'>
            <img src={tractor} alt='' />
            <p>Premium</p>
          </div>
          </div>

        <div className='link-footer'>
          <img src={arrow} alt=''/>
          <a href='l'>View opportunity on polygon</a>
        </div>

        <div className='acres'>
            <div className='sub-acres'>
                <h2>200 Acres</h2>
                <p>Area</p>
            </div>

            <div className='sub-acres'>
                <h2>5 Lakhs</h2>
                <p>Starting Price</p>
            </div>

            <div className='sub-acres'>
                <h2>10 days</h2>
                <p>Remaining Days</p>
            </div>

            <div className='sub-acres'>
                <h2>2.5 Years</h2>
                <p>Next check</p>
            </div>

        </div>

        </div>

        

        <div className='footer-top-right'>
            <Button
                button="Complete"
                className="footer-top-right-button-1"
            />
            <Button
                button="Site >"
                className="footer-top-right-button-2"
            />

            <div className='amount-footer'>
              <h2 className='amount-blue'>Rs 20,00,000</h2>
              <p className='amount-grey'>Rs 65,00,000</p>              
              </div>

              <hr/>

              
            
           
            

        </div>

    </div>
  )
}

export default Footer