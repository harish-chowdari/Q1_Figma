import React from 'react'
import "./Scroll.css"
import ScrollLeft from '../ScrollLeft/ScrollLeft'
import ScrollRight from '../ScrollRight/ScrollRight'

const Scroll = () => {
  return (
    <div className='scroll'>
        <ScrollLeft/>
        <ScrollRight/>
    </div>
  )
}

export default Scroll