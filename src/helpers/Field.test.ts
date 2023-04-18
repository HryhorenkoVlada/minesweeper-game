import { emptyFieldGenerator, fieldGenerator } from './Field'

import { CellState } from '../types'

const { empty, hidden, bomb } = CellState

describe('Field Generator', () => {
  describe('emptyFieldGenerator tests', () => {
    it('2*2 field', () => {
      expect(emptyFieldGenerator(2)).toStrictEqual([
        [empty, empty],
        [empty, empty],
      ])
    })
    it('3*3 field', () => {
      expect(emptyFieldGenerator(3)).toStrictEqual([
        [empty, empty, empty],
        [empty, empty, empty],
        [empty, empty, empty],
      ])
    })
    it('3*3 field with hidden state', () => {
      expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
        [hidden, hidden, hidden],
      ])
    })
  })

  describe('Simple cases', () => {
    it('wrong probability', () => {
      const errorText = 'Probability must be in range [0, 1]'
      expect(() => fieldGenerator(1, -1)).toThrow(errorText)
      expect(() => fieldGenerator(1, 2)).toThrow(errorText)
    })
    it('smallest possible field without mine', () => {
      expect(fieldGenerator(1, 0)).toStrictEqual([[empty]])
    })
    it('big field without mine', () => {
      expect(fieldGenerator(10, 0)).toStrictEqual(
        new Array(10).fill(empty).map(() => new Array(10).fill(empty))
      )
    })
    it('smallest possible field with mine', () => {
      expect(fieldGenerator(1, 1)).toStrictEqual([[bomb]])
    })
    it('2*2 field with mines', () => {
      expect(fieldGenerator(2, 1)).toStrictEqual([
        [bomb, bomb],
        [bomb, bomb],
      ])
    })
    it('2*2 field with 50% probability', () => {
      const field = fieldGenerator(2, 0.5)
      const fieldFlatten = field.flat()

      const cellsWithBombs = fieldFlatten.filter((cell) => cell === bomb)
      const emptyBombs = fieldFlatten.filter((cell) => cell === 2)

      expect(cellsWithBombs).toHaveLength(2)
      expect(emptyBombs).toHaveLength(2)
    })
  })

  describe('Complex cases', () => {
    it('10*10 field with 1/4 probability', () => {
      const size = 10
      const mines = 25

      const probability = mines / (size * size)
      const field = fieldGenerator(size, probability)
      const fieldFlatten = field.flat()

      const cellsWithBombs = fieldFlatten.filter((cell) => cell === bomb)
      expect(cellsWithBombs).toHaveLength(mines)
    })
  })
})
