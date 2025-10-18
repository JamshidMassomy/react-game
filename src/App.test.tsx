import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should render the Game component correctly', () => {
    render(<App />)
    const gameComponent = screen.getByTestId('game-component')
    expect(gameComponent).toBeInTheDocument()
  })
})
