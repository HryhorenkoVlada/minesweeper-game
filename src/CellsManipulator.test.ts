import {
  getNeighboursItems,
  incrementNeighbours,
  checkItemInField,
} from './CellsManipulator'
import { CellState, Field } from './types'

const { empty, hidden, bomb } = CellState

describe('Check Increment Neighbors', () => {
  describe('Simple cases', () => {
    it('Field with only one cell', () => {
      expect(incrementNeighbours([0, 0], [[bomb]])).toStrictEqual([[bomb]])
    })
    it('Field 2*2 with one bomb', () => {
      expect(
        incrementNeighbours(
          [0, 0],
          [
            [bomb, empty],
            [empty, empty],
          ]
        )
      ).toStrictEqual([
        [bomb, 1],
        [1, 1],
      ])
    })
    it('field 3*3 with one centered bomb', () => {
      expect(
        incrementNeighbours(
          [1, 1],
          [
            [empty, empty, empty],
            [empty, bomb, empty],
            [empty, empty, empty],
          ]
        )
      ).toStrictEqual([
        [1, 1, 1],
        [1, bomb, 1],
        [1, 1, 1],
      ])
    })
    it('field 3*3 with two bombs', () => {
      expect(
        incrementNeighbours(
          [1, 1],
          [
            [empty, empty, empty],
            [empty, bomb, 1],
            [empty, 1, bomb],
          ]
        )
      ).toStrictEqual([
        [1, 1, 1],
        [1, bomb, 2],
        [1, 2, bomb],
      ])
    })

    // it('field 4*4 with two bombs', () => {
    //   expect(
    //     incrementNeighbours(
    //       [1, 1],
    //       [
    //         [empty, empty, empty, empty],
    //         [empty, bomb, 1, empty],
    //         [empty, 1, bomb, empty],
    //         [empty, empty, empty, empty],
    //       ]
    //     )
    //   ).toStrictEqual([
    //     [1, 1, 1, 0],
    //     [1, bomb, 2, 1],
    //     [1, 2, bomb, 1],
    //     [0, 1, 1, 1],
    //   ])
    // })
    // it('field 9*9 with 5 bombs', () => {
    //   expect(
    //     incrementNeighbours(
    //       [4, 4],
    //       [
    //         [empty, empty, empty, empty, bomb, empty, empty, empty, empty],
    //         [empty, empty, empty, 1, 1, 1, empty, empty, empty],
    //         [empty, empty, empty, empty, bomb, 1, empty, empty, empty],
    //         [empty, empty, empty, 1, 2, bomb, empty, empty, empty],
    //         [empty, empty, empty, empty, bomb, 1, empty, empty, empty],
    //         [empty, empty, empty, 1, empty, empty, empty, empty, empty],
    //         [empty, empty, bomb, empty, empty, empty, empty, empty, empty],
    //         [empty, empty, empty, empty, empty, empty, empty, empty, empty],
    //         [empty, empty, empty, empty, empty, empty, empty, empty, empty],
    //       ]
    //     )
    //   ).toStrictEqual([
    //     [empty, empty, empty, 1, bomb, 1, empty, empty, empty],
    //     [empty, empty, empty, 2, 2, 2, empty, empty, empty],
    //     [empty, empty, empty, 1, bomb, 2, 1, empty, empty],
    //     [empty, empty, empty, 2, 3, bomb, 1, empty, empty],
    //     [empty, empty, empty, 1, bomb, 2, 1, empty, empty],
    //     [empty, 1, 1, 2, 1, 1, empty, empty, empty],
    //     [empty, 1, bomb, 1, empty, empty, empty, empty, empty],
    //     [empty, 1, 1, 1, empty, empty, empty, empty, empty],
    //     [empty, empty, empty, empty, empty, empty, empty, empty, empty],
    //   ])
    // })
  })
})

describe('Check Neighbors Selector', () => {
  it('Case with [0, 0] coordinates', () => {
    expect(getNeighboursItems([0, 0])).toStrictEqual({
      top: [-1, 0],
      topRight: [-1, 1],
      right: [0, 1],
      bottomRight: [1, 1],
      bottom: [1, 0],
      bottomLeft: [1, -1],
      left: [0, -1],
      leftTop: [-1, -1],
    })
  })
  it('Case with [1, 1] coordinates', () => {
    expect(getNeighboursItems([1, 1])).toStrictEqual({
      top: [0, 1],
      topRight: [0, 2],
      right: [1, 2],
      bottomRight: [2, 2],
      bottom: [2, 1],
      bottomLeft: [2, 0],
      left: [1, 0],
      leftTop: [0, 0],
    })
  })
  it('Case with [3, 3] coordinates', () => {
    expect(getNeighboursItems([3, 3])).toStrictEqual({
      top: [2, 3],
      topRight: [2, 4],
      right: [3, 4],
      bottomRight: [4, 4],
      bottom: [4, 3],
      bottomLeft: [4, 2],
      left: [3, 2],
      leftTop: [2, 2],
    })
  })
})

describe('checkItemInField tests', () => {
  describe('Simple cases', () => {
    const field: Field = [[empty]]

    it('out of y range', () => {
      expect(checkItemInField([1, 0], field)).toBe(false)
    })
    it('out of x range', () => {
      expect(checkItemInField([0, -1], field)).toBe(false)
    })
    it('In x and y range', () => {
      expect(checkItemInField([0, 0], field)).toBe(true)
    })
  })
  describe('Complex cases', () => {
    const field: Field = [
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
      [empty, empty, empty, empty, empty],
    ]

    it('out of y range', () => {
      expect(checkItemInField([0, 5], field)).toBe(false)
    })
    it('out of y range with negative value', () => {
      expect(checkItemInField([-1, 0], field)).toBe(false)
    })
    it('out of x range', () => {
      expect(checkItemInField([5, 0], field)).toBe(false)
    })
    it('out of x range with negative value', () => {
      expect(checkItemInField([0, -1], field)).toBe(false)
    })
    it('in x and y range', () => {
      expect(checkItemInField([3, 4], field)).toBe(true)
    })
  })
})
