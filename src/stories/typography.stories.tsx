import type { Meta, StoryObj } from '@storybook/react-vite'

import Typography from '../typography'

const meta = {
  title: 'ui/typography',
  component: Typography,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const BodyText: Story = {
  args: {
    children: 'My text',
  },
}
