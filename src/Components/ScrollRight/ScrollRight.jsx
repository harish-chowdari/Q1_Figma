import React, { useState } from 'react';
import "./ScrollRight.css";
import Button from "../Button/Button";
import Step1 from '../Step1/Step1';
import Step2 from '../Step2/Step2';
import Step3 from '../Step3/Step3';
import Step5 from '../Step5/Step5';
import Step4 from '../Step4/Step4';
import Step6 from '../Step6/Step6';

const ScrollRight = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  

  return (
    <div className='all-steps'>
        <Step1/>
        <Step2/>
        <Step3/>
        <Step4/>
        <Step5/>
        <Step6/>
    
    </div> 
  )
}

export default ScrollRight;
