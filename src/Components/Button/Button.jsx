import React from 'react'

const Button = ({button,className}) => {
  return (
    <div>
        <button className={className}>{button}</button>
    </div>
  )
}

export default Button