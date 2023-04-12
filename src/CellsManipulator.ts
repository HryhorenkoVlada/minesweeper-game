import { Cell, Coords, Field } from './types'

export const getNeighboursItems = ([y, x]: Coords): Record<
  string,
  [number, number]
> => ({
  top: [y - 1, x],
  topRight: [y - 1, x + 1],
  right: [y, x + 1],
  bottomRight: [y + 1, x + 1],
  bottom: [y + 1, x],
  bottomLeft: [y + 1, x - 1],
  left: [y, x - 1],
  leftTop: [y - 1, x - 1],
})

export const checkItemInField = ([y, x]: Coords, { length }: Field) =>
  y >= 0 && x >= 0 && y < length && x < length

export const incrementNeighbours = (coords: Coords, field: Field): Field => {
  const neighbours = getNeighboursItems(coords)

  Object.values(neighbours).forEach(([y, x]) => {
    if (checkItemInField([y, x], field)) {
      const cell = field[y][x]
      if (cell < 8) {
        field[y][x] = (cell + 1) as Cell
      }
    }
  })
  return field
}
