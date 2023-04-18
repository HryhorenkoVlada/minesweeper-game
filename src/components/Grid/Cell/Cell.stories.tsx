import { Meta, StoryObj } from '@storybook/react'

import { Cell } from './Cell'

export default {
  title: 'Grid/Cell',
  component: Cell,
  argTypes: {
    coords: { defaultValue: [1, 1] },
  },
} as Meta

type Story = StoryObj<typeof Cell>

export const CellClosed: Story = {
  args: {
    children: 10,
  },
}
export const CellIsEmpty: Story = {
  args: {
    children: 0,
  },
}
export const CellWithBomb: Story = {
  args: {
    children: 9,
  },
}
export const CellWithFlag: Story = {
  args: {
    children: 11,
  },
}
export const CellWith1: Story = {
  args: {
    children: 1,
  },
}
export const CellWith2: Story = {
  args: {
    children: 2,
  },
}
export const CellWith5: Story = {
  args: {
    children: 5,
  },
}

export const CellWith8: Story = {
  args: {
    children: 8,
  },
}
