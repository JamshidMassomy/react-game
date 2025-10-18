import { GRID_SIZE } from '../constants/game.constant'

export const createGrid = () => {
  return Array(GRID_SIZE)
    .fill(false)
    .map(() => Array(GRID_SIZE).fill(false))
}
