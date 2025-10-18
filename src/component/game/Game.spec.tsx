import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Game from './Game'
import {
  RESET_BUTTON_LABEL,
  START_BUTTON_LABEL
} from '../../constants/game.constant'

describe('Game', () => {
  it('should start the game when start button is clicked', () => {
    render(<Game />)
    const startButton = screen.getByText(START_BUTTON_LABEL)
    fireEvent.click(startButton)
    expect(screen.getByText(START_BUTTON_LABEL)).toBeInTheDocument()
  })

  it('should stop the game when stop button is clicked', () => {
    render(<Game />)
    const startButton = screen.getByText(START_BUTTON_LABEL)
    fireEvent.click(startButton)
    const stopButton = screen.getByText(START_BUTTON_LABEL)
    fireEvent.click(stopButton)
    expect(screen.getByText(START_BUTTON_LABEL)).toBeInTheDocument()
  })

  it('should reset the game when reset button is clicked', () => {
    render(<Game />)
    const startButton = screen.getByText(START_BUTTON_LABEL)
    fireEvent.click(startButton)
    const resetButton = screen.getByText(RESET_BUTTON_LABEL)
    fireEvent.click(resetButton)
    expect(screen.getByText(START_BUTTON_LABEL)).toBeInTheDocument()
    expect(screen.getByText(RESET_BUTTON_LABEL)).toBeInTheDocument()
  })
})
