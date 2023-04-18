import { StoryObj, Meta } from '@storybook/react'

import { Counter } from './Counter'

export default {
  title: 'Scoreboard/Counter',
  component: Counter,
} as Meta

type Story = StoryObj<typeof Counter>

export const GameLegend: Story = {
  args: {
    children: '010',
  },
}
