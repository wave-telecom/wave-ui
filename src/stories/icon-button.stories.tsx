import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { borderRadiusValuesTokens } from 'theme-token-manager'

import IconButton from '../icon-button'
import { iconMapping, iconOptions } from '../icons'

const meta = {
  title: 'ui/icon-button',
  component: IconButton,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      options: iconOptions,
      mapping: iconMapping,
    },
    radius: {
      options: borderRadiusValuesTokens,
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    icon: iconMapping['arrow-left'],
    ariaLabel: 'Click Me',
  },
  argTypes: {},
}
