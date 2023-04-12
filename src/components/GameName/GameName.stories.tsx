import { StoryObj, Meta } from '@storybook/react'
import { GameName } from './GameName'

export default {
  title: 'Header/GameName',
  component: GameName,
} as Meta

type Story = StoryObj<typeof GameName>

export const MinesweeperGameNameStory: Story = {
  args: {
    name: 'minesweeper',
  },
}
