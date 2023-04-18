import { StoryObj, Meta } from '@storybook/react'

import { Legend } from './Legend'

export default {
  title: 'Header/Legend',
  component: Legend,
} as Meta

type Story = StoryObj<typeof Legend>

export const GameLegend: Story = {
  args: {
    feature: 'flag',
    firstAction: 'alt',
    secondAction: 'click',
  },
}
