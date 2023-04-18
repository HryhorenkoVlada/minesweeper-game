import { StoryObj, Meta } from '@storybook/react'

import { ResetButton } from './ResetButton'

export default {
  title: 'Scoreboard/ResetButton',
  component: ResetButton,
} as Meta

type Story = StoryObj<typeof ResetButton>

export const GameLegend: Story = {
  args: {},
}
