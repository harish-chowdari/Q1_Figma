import React from 'react';
import "./Scroll.css";
import ScrollLeft from '../ScrollLeft/ScrollLeft';
import ScrollRight from '../ScrollRight/ScrollRight';

const Scroll = () => {
  return (
    <div className='scroll'>
      <ScrollLeft />
      <div className='sl-in-scroll'>
        <ScrollRight/>
       
      </div>
    </div>
  );
}

export default Scroll;
