import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { borderRadiusValuesTokens } from 'theme-token-manager'

import Button from '../button'
import { iconMapping, iconOptions } from '../icons'

const meta = {
  title: 'ui/button',
  component: Button,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    startIcon: {
      options: iconOptions,
      mapping: iconMapping,
    },
    endIcon: {
      options: iconOptions,
      mapping: iconMapping,
    },
  },
  args: { onClick: fn() },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button')
    await userEvent.click(button)
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    color: 'primary',
  },
  argTypes: {
    radius: {
      options: borderRadiusValuesTokens,
    },
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    color: 'secondary',
  },
  argTypes: {
    radius: {
      options: borderRadiusValuesTokens,
    },
  },
}

export const IconStart: Story = {
  args: {
    children: 'Button',
    startIcon: iconMapping['arrow-left'],
    color: 'secondary',
  },
  argTypes: {
    radius: {
      options: borderRadiusValuesTokens,
    },
  },
}

export const IconEnd: Story = {
  args: {
    children: 'Button',
    endIcon: iconMapping['arrow-right'],
    color: 'secondary',
  },
  argTypes: {
    radius: {
      options: borderRadiusValuesTokens,
    },
  },
}
