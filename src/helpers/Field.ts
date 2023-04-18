import { CellState, Field, Cell } from '../types'

import { incrementNeighbours } from './CellsManipulator'

const { empty, bomb } = CellState

export const emptyFieldGenerator = (size: number, state: Cell = empty): Field =>
  new Array(size).fill(null).map(() => new Array(size).fill(state))

export const fieldGenerator = (size: number, probability: number): Field => {
  if (probability < 0 || probability > 1) {
    throw new Error('Probability must be in range [0, 1]')
  }
  let freeCellsCount = size * size
  let bombCellsCount = Math.floor(freeCellsCount * probability)

  const result = emptyFieldGenerator(size)

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (bombCellsCount === 0) {
        return result
      }
      if (bombCellsCount / freeCellsCount > Math.random()) {
        result[i][j] = bomb
        incrementNeighbours([i, j], result)
        bombCellsCount--
      }
      freeCellsCount--
    }
  }
  return result
}
