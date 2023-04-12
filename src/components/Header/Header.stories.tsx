import { StoryObj, Meta } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'Header/Header',
  component: Header,
} as Meta

type Story = StoryObj<typeof Header>

export const HeaderStory: Story = {
  args: {
    name: 'minesweeper',
    feature: 'flag',
    firstAction: 'alt',
    secondAction: 'click',
  },
}
