/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders button with correct label', () => {
    const label = 'Click me'
    const handleButtonClick = jest.fn()
    const { getByText } = render(
      <Button label={label} handleButtonClick={handleButtonClick} />
    )
    const button = getByText(label)
    expect(button).toBeInTheDocument()
  })

  it('calls handleButtonClick function when button is clicked', () => {
    const label = 'Click me'
    const handleButtonClick = jest.fn()

    const { getByText } = render(
      <Button label={label} handleButtonClick={handleButtonClick} />
    )
    const button = getByText(label)
    fireEvent.click(button)
    expect(handleButtonClick).toHaveBeenCalledTimes(1)
  })
})
