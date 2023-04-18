import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Counter } from './Counter'
import { Level } from './Level'
import { ResetButton } from './ResetButton'

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string
  /**
   * Possible game scenarios
   */
  levels: string[]
  /**
   * Action handler when the GameReset button is clicked
   */
  onReset: () => void
  /**
   * Bombs in the field
   */
  mines: string
}

export const Scoreboard: FC<ScoreboardProps> = ({
  time,
  levels,
  mines,
  onReset,
}) => (
  <ScoreboardWrapper>
    <Counter>{time}</Counter>
    <Level>{levels}</Level>
    <ResetButton onReset={onReset} />
    <Counter>{mines}</Counter>
  </ScoreboardWrapper>
)

const ScoreboardWrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`
