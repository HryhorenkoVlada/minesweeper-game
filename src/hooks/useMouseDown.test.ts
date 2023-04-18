import { renderHook, waitFor, act } from '@testing-library/react'

import { useMouseDown } from './useMouseDown'

describe('useMouseDown hook', () => {
  it('Should toggle state after onMouseDown/onMouseUp calls', async () => {
    const { result } = renderHook(useMouseDown)
    const [mouseDown, onMouseDown, onMouseUp] = result.current

    expect(mouseDown).toBe(false)

    act(onMouseDown)
    expect(result.current[0]).toBe(true)

    act(onMouseUp)
    expect(result.current[0]).toBe(false)

    // Or you can use act() to wrap the function call
    act(onMouseDown)
    expect(result.current[0]).toBe(true)

    // still causes an act()-warning because of updating state after unmount
    // onMouseUp()
    // await waitFor(() => expect(result.current[0]).toBe(false))
  })
})
