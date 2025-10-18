/* eslint-disable testing-library/no-node-access */

// react
import React from 'react'

// component
import MemorizedCell from './Cell'

// test
import { render, fireEvent } from '@testing-library/react'

describe('Cell', () => {
  const mockOnCellClick = jest.fn()
  const mockKey = 'cell1'

  it('renders with correct class and click handler', () => {
    const { container } = render(
      <MemorizedCell
        onCellClick={mockOnCellClick}
        isAlive={true}
        key={mockKey}
      />
    )
    const cellElement: any = container.firstChild
    expect(cellElement).toHaveClass('cell alive')
    fireEvent.click(cellElement)
    expect(mockOnCellClick).toHaveBeenCalledTimes(1)
  })

  it('renders with correct class when not alive', () => {
    const { container } = render(
      <MemorizedCell
        onCellClick={mockOnCellClick}
        isAlive={false}
        key={mockKey}
      />
    )
    const cellElement = container.firstChild
    expect(cellElement).toHaveClass('cell')
  })
})
