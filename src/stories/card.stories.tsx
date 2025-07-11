import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  borderRadiusValuesTokens,
  spacingValuesTokens,
} from 'theme-token-manager'

import Card from '../card'

const meta = {
  title: 'ui/card',
  component: Card,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: {
      control: 'select',
      options: borderRadiusValuesTokens,
    },
    gap: {
      control: 'select',
      options: spacingValuesTokens,
    },
    padding: {
      control: 'select',
      options: spacingValuesTokens,
    },
    selectedVariant: {
      control: 'select',
      options: ['solid', 'gradient'],
    },
    children: {
      control: 'text',
    },
    background: {
      control: 'select',
      options: ['page', 'pageAlternative'],
    },
  },
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    gap: 'xs',
    isSelected: false,
    padding: '2xs',
    radius: 'none',
    children: (
      <>
        <div>{'Card Title'}</div>
        <div>{'Card Content'}</div>
      </>
    ),
  },
}
