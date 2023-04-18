import React from 'react'
import { render, screen, fireEvent, createEvent } from '@testing-library/react'

import { CellState, Coords } from '@/types'

import { Cell, ClosedFrame } from './Cell'

describe('Cell component check', () => {
  const coords: Coords = [1, 1]
  const props = {
    coords,
    flagCounter: 0,
    bombs: 10,
    onClick: jest.fn(),
    onContextMenu: jest.fn(),
  }

  it('Empty cell renders correct', () => {
    const { asFragment } = render(<Cell {...props}>{CellState.empty}</Cell>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Bomb cell renders correct', () => {
    render(<Cell {...props}>{CellState.bomb}</Cell>)

    expect(screen.getByTestId(`bomb_${coords.join()}`)).toBeInTheDocument()
  })

  it('Flag cell renders correct', () => {
    render(<Cell {...props}>{CellState.flag}</Cell>)

    expect(screen.getByTestId(`flag_${coords.join()}`)).toBeInTheDocument()
  })

  it('Weak Flag cell renders correct', () => {
    render(<Cell {...props}>{CellState.weakFlag}</Cell>)

    expect(screen.getByTestId(`weakFlag_${coords.join()}`)).toBeInTheDocument()
  })

  it('Hidden cell renders correct', () => {
    const { asFragment } = render(<Cell {...props}>{CellState.hidden}</Cell>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Check prevent default contextMenu for empty type of cell', () => {
    render(<Cell {...props}>{CellState.empty}</Cell>)

    const cellComp = screen.getByTestId(`${coords}`)

    const contextMenuEvent = createEvent.contextMenu(cellComp)
    fireEvent(cellComp, contextMenuEvent)

    expect(contextMenuEvent.defaultPrevented).toBe(true)
  })

  it('onClick and onContextMenu handler should be called for active cells', () => {
    render(<Cell {...props}>{CellState.hidden}</Cell>)

    const cellComp = screen.getByTestId(`${coords}`)

    fireEvent.click(cellComp)
    fireEvent.contextMenu(cellComp)

    expect(props.onClick).toBeCalled()
    expect(props.onContextMenu).toBeCalled()
  })

  it('onClick and onContextMenu handler should not be called for active cells', () => {
    render(<Cell {...props}>{CellState.empty}</Cell>)

    const cellComp = screen.getByTestId(`${coords}`)

    fireEvent.click(cellComp)
    fireEvent.contextMenu(cellComp)

    expect(props.onClick).not.toBeCalled()
    expect(props.onContextMenu).not.toBeCalled()
  })

  it('Closed Frame renders correct', () => {
    const { asFragment } = render(<ClosedFrame mouseDown={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
