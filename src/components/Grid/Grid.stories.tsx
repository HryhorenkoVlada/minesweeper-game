import { StoryObj, Meta } from '@storybook/react'

import { Grid } from './Grid'

export default {
  title: 'Grid/Grid',
  component: Grid,
} as Meta

type Story = StoryObj<typeof Grid>

export const GridExample: Story = {
  args: {
    children: [
      [9, 2, 9, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1, 0, 1, 9, 1, 1, 9, 1],
      [0, 0, 1, 9, 10, 0, 2, 2, 2, 1, 1, 1],
      [0, 0, 10, 10, 1, 0, 1, 9, 1, 2, 2, 2],
      [0, 1, 1, 2, 2, 9, 1, 1, 1, 0, 0, 0],
      [0, 1, 9, 3, 9, 2, 10, 0, 0, 2, 1, 1],
      [0, 2, 2, 4, 9, 2, 10, 1, 1, 1, 9, 1],
      [0, 1, 9, 2, 1, 1, 1, 9, 1, 2, 2, 2],
      [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
      [0, 1, 10, 10, 0, 0, 1, 1, 1, 1, 9, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 9, 1],
    ],
  },
}
