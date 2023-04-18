import { StoryObj, Meta } from '@storybook/react'

import { Level } from './Level'

export default {
  title: 'Scoreboard/Level',
  component: Level,
} as Meta

type Story = StoryObj<typeof Level>

export const GameLegend: Story = {
  args: {
    children: ['beginner', 'intermediate', 'expert'],
  },
}
