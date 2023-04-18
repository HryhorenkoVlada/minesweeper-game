import React, { FC } from 'react'
import styled from '@emotion/styled'
import { useMouseDown } from '@/hooks/useMouseDown'

export interface ResetProps {
  /**
   * Reset action handler
   */
  onReset: () => void
}

export const ResetButton: FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown()

  return (
    <StyledResetButton
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
      onClick={onReset}
    >
      {mouseDown ? '😯' : '🙂'}
    </StyledResetButton>
  )
}

const StyledResetButton = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-width: 0.15vw;
  border-style: solid;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`
