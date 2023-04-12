import { FC } from 'react'
import styled from '@emotion/styled'

export interface GameNameProps {
  name: string
}

const GameNameContainer = styled.h1`
  font-size: 2rem;
`

export const GameName: FC<GameNameProps> = ({ name }: GameNameProps) => (
  <GameNameContainer>{name}</GameNameContainer>
)
