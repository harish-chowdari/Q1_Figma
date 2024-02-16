import React from 'react'
import "./Step1.css"


const Step1 = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked)
    }
    
  
    return (
      <div className='step-1'>
      {isChecked ?

        <div className='step1-top'>
          <div className='step1-div-top-left'>
            <label className='label-in-step1-top' htmlFor='checkboxId' >
              <input type='checkbox' id='checkboxId' onChange={handleCheckboxChange} />
              <p className='step1-text-title'>Complete Profile</p>
            </label>
            <p className='step1-text-subtitle'>Good job!</p>
            <p className='step1-text'>Complete</p>
          </div>
          
          <div className='step1-div-top-right'>
            <p className='step-date'>12/12/2023</p>
            
              <button className="step1-top-btn" >Download</button>
  
          </div>
      </div>

      :
      
      <div className='first-visible'>
          <label className='label-in-step-1' htmlFor='checkboxId'>
            <input type='checkbox' id='checkboxId' onChange={handleCheckboxChange} />
            <p className='strong'><strong>Complete profile</strong></p>
          </label>
          <button className="step1-btn-1">Complete</button>
        </div> 
        
        
        
        
      }
  
        
      
      </div> 
  )
}

export default Step1