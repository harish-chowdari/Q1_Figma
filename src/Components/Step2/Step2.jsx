import React from 'react'
import "./Step2.css"


const Step2 = () => {
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
              <p className='step1-text-title'>Step 1</p>
            </label>
            <p className='step1-text-subtitle'>5% of total amount</p>
            <p className='step1-text'>Rs 1,00,000</p>
          </div>
          
          <div className='step1-div-top-right'>
            <p className='step-date'>14/12/2023</p>
            
              <button className="step1-top-btn" >Receipt</button>
  
          </div>
      </div>

      :
      <div className='first-visible'>
          <label className='label-in-step-1' htmlFor='checkboxId'>
            <input type='checkbox' id='checkboxId' onChange={handleCheckboxChange} />
            <p className='gery'>Step 1</p>
          </label>
          <button className="step2-btn-1">Pay</button>
        </div> 
      }
  
        
      
      </div> 
  )
}

export default Step2