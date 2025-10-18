// react
import React from 'react'

// constant & styles
import { GAME_HEADING } from '../../constants/game.constant'
import './HeadingStyles.scss'

const GameHeading: React.FC<any> = () => {
  return (
    <div className='game-heading'>
      <h1>{GAME_HEADING}</h1>
    </div>
  )
}
export default React.memo(GameHeading)
