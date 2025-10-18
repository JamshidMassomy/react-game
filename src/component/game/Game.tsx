// react
import React, { useState } from 'react'

// components
import Button from '../button/Button'
import GameHeading from '../game_heading/Heading'
import GameGrid from '../game_grid/GameGrid'

// styles
import './GameStyles.scss'
import {
  RESET_BUTTON_LABEL,
  START_BUTTON_LABEL,
  STOP_BUTTON_LABEL
} from '../../constants/game.constant'

const Game = () => {
  const [isGameRunning, setIsGamingRunning] = useState(false)
  const [isGridReset, setIsGridReset] = useState(false)

  const stopGame = () => {
    setIsGamingRunning(false)
  }

  const startGame = () => {
    setIsGamingRunning(true)
  }

  const resetGame = () => {
    setIsGridReset(!isGridReset)
    setIsGamingRunning(false)
  }

  return (
    <div className='game-content' data-testid='game-component'>
      <GameHeading />
      <div className='game-grid'>
        <GameGrid isGameRunning={isGameRunning} isGridReset={isGridReset} />
      </div>
      <div className='game-button'>
        <Button handleButtonClick={stopGame} label={STOP_BUTTON_LABEL} />
        <Button handleButtonClick={startGame} label={START_BUTTON_LABEL} />
        <Button handleButtonClick={resetGame} label={RESET_BUTTON_LABEL} />
      </div>
    </div>
  )
}
export default React.memo(Game)
