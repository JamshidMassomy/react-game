// react
import React from 'react'

//test
import { render, screen } from '@testing-library/react'

// component & constant
import GameHeading from '../game_heading/Heading'
import { GAME_HEADING } from '../../constants/game.constant'

describe('GameHeading', () => {
  it('should renders the game heading correctly', () => {
    render(<GameHeading />)
    const headingElement = screen.getByText(GAME_HEADING)
    expect(headingElement).toBeInTheDocument()
  })
})
