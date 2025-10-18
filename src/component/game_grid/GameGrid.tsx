// react
import React, { useCallback, useEffect, useState } from 'react'

// components
import MemorizedCell from '../cell/Cell'

// util & constants
import { createGrid } from '../../util/GridUtil'
import { GRID_SIZE } from '../../constants/game.constant'
import { IGrid } from './Grid'

const GameGrid: React.FC<IGrid> = ({ isGameRunning, isGridReset }: IGrid) => {
  const [grid, setGrid] = useState(createGrid())

  useEffect(() => {
    setGrid(createGrid())
  }, [isGridReset])

  const updateGrid = (newGrid) => {
    setGrid(newGrid)
  }

  const countNeighbors = useCallback(
    (row: number, col: number) => {
      let count = 0
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue
          const newRow = (row + i + GRID_SIZE) % GRID_SIZE
          const newCol = (col + j + GRID_SIZE) % GRID_SIZE

          if (grid[newRow][newCol]) count++
        }
      }
      return count
    },
    [grid]
  )

  const calculateNextGeneration = useCallback(() => {
    const newGrid = createGrid()

    if (JSON.stringify(newGrid) === JSON.stringify(grid)) {
      return
    }

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid.length; col++) {
        const neighbors = countNeighbors(row, col)
        const isCellAlive = grid[row][col]
        if (isCellAlive) {
          newGrid[row][col] = neighbors === 2 || neighbors === 3
        } else {
          newGrid[row][col] = neighbors === 3
        }
      }
    }
    updateGrid(newGrid)
  }, [countNeighbors, grid])

  useEffect(() => {
    let intervalId
    if (isGameRunning) {
      intervalId = setInterval(calculateNextGeneration, 1000)
    }
    return () => clearInterval(intervalId)
  }, [grid, isGameRunning, calculateNextGeneration])

  const handleCellClick = (row: number, col: number) => {
    const newGrid = [...grid]
    newGrid[row][col] = !newGrid[row][col]
    updateGrid(newGrid)
  }

  return (
    <>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((cell, colIndex) => (
            <MemorizedCell
              key={`${colIndex} - ${rowIndex}`}
              isAlive={cell}
              onCellClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  )
}
export default React.memo(GameGrid)
