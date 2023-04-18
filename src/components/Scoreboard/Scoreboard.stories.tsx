import { Meta, StoryObj } from '@storybook/react'

import { Scoreboard } from './Scoreboard'

export default {
  title: 'Scoreboard/Scoreboard',
  component: Scoreboard,
} as Meta

type Story = StoryObj<typeof Scoreboard>

export const GameLegend: Story = {
  args: {
    time: '000',
    levels: ['beginner', 'intermediate', 'expert'],
    mines: '010',
  },
}
