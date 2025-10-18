import React from 'react'
import './ButtonStyle.scss'
import { IButton } from './IButton'

const Button: React.FC<IButton> = ({ handleButtonClick, label }) => {
  return (
    <>
      <button className='game-btn' onClick={handleButtonClick}>
        {label}
      </button>
    </>
  )
}

export default React.memo(Button)
