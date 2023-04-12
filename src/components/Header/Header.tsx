import React, { FC } from 'react'
import styled from '@emotion/styled'

import { GameName, GameNameProps } from '../GameName/GameName'
import { Legend, LegendProps } from '../Legend/Legend'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export type HeaderProps = GameNameProps & LegendProps

export const Header: FC<HeaderProps> = ({ name, ...legendProps }) => (
  <HeaderContainer>
    <GameName name={name} />
    <Legend {...legendProps} />
  </HeaderContainer>
)
