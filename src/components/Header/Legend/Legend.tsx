import React, { FC } from 'react'
import styled from '@emotion/styled'

const LegendContainer = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`

const Code = styled.code`
  background: #e3e3e3;
`

const FirstAction = styled.span`
  color: #ec433c;
`

const SecondAction = styled.span`
  color: #2a48ec;
`

export interface LegendProps {
  feature: string
  firstAction: string
  secondAction: string
}

export const Legend: FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => (
  <LegendContainer>
    <strong>{feature}: </strong>
    <Code>
      <FirstAction>{firstAction}</FirstAction>+
      <SecondAction>{secondAction}</SecondAction>
    </Code>
  </LegendContainer>
)
