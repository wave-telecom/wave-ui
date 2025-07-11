import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/internal/test'
import {
  borderRadiusValuesTokens,
  spacingValuesTokens,
} from 'theme-token-manager'

import Chip from '../chip'

const meta = {
  title: 'ui/chip',
  component: Chip,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {
  args: {
    color: 'primary',
    radius: 'pill',
    font: 'body',
    variant: 'filled',
    children: 'Chip',
  },
  argTypes: {
    radius: {
      control: 'select',
      options: borderRadiusValuesTokens,
    },
    children: {
      control: 'text',
    },
    horizontalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
    verticalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
  },
}

export const Outlined: Story = {
  args: {
    color: 'secondary',
    radius: 'pill',
    font: 'body',
    variant: 'outlined',
    children: 'Chip',
  },
  argTypes: {
    radius: {
      control: 'select',
      options: borderRadiusValuesTokens,
    },
    children: {
      control: 'text',
    },
    horizontalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
    verticalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
  },
}

export const Clickable: Story = {
  args: {
    color: 'primary',
    radius: 'pill',
    font: 'body',
    variant: 'filled',
    children: 'Chip',
    onClick: fn(),
  },
  argTypes: {
    radius: {
      control: 'select',
      options: borderRadiusValuesTokens,
    },
    children: {
      control: 'text',
    },
    horizontalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
    verticalPadding: {
      control: 'select',
      options: spacingValuesTokens,
    },
  },
  play: async ({ canvas, userEvent }) => {
    const chipButton = canvas.getByText('Chip')
    await userEvent.click(chipButton)
  },
}
