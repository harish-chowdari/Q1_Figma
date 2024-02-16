import React from 'react'


const Step4 = () => {
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
            <p className='step1-text-subtitle'>We will get back to you in 3 months</p>
            <p className='step1-text'>Complete</p>
          </div>
          
          <div className='step1-div-top-right'>
            <p className='step-date'>16/12/2023</p>
            
              <button className="step1-top-btn" >Download</button>
  
          </div>
      </div>

      :

      <div className='first-visible'>
          <label className='label-in-step-1' htmlFor='checkboxId'>
            <input type='checkbox' id='checkboxId' onChange={handleCheckboxChange} />
            <p className='gery'>Step 3</p>
          </label>
          <button className="step2-btn-1">Complete</button>
        </div> 
      }
  
        
      
      </div> 
  )
}

export default Step4