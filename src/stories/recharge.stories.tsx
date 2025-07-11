import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/internal/test'
import {
  borderRadiusValuesTokens,
  spacingValuesTokens,
} from 'theme-token-manager'

import ThemeDecorator from '../../.storybook/decorators/theme-decorator'
import Recharge from '../examples/recharge'
import { iconMapping, iconOptions } from '../icons'

const meta = {
  title: 'examples/recharge',
  component: Recharge,
  decorators: [],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    gap: {
      control: 'select',
      options: spacingValuesTokens,
    },
    padding: {
      control: 'select',
      options: spacingValuesTokens,
    },
    radius: {
      control: 'select',
      options: borderRadiusValuesTokens,
    },
    styles: {
      control: 'object',
    },
    actionIcon: {
      control: 'select',
      options: iconOptions,
      mapping: iconMapping,
    },
  },
  args: {},
} satisfies Meta<typeof Recharge>

export default meta
type Story = StoryObj<typeof meta>

export const AlgarRecharge: Story = {
  decorators: [ThemeDecorator('algar')],
  args: {
    onSelect: fn(),
    price: 'R$ 30,00',
    textAlign: 'left',
    gap: '2xs',
    title: 'Validade dos créditos: 90 dias',
    padding: 'xs',
    minWidth: 350,
    radius: 'lg',
    verticalAlign: 'start',
    horizontalAlign: 'start',
    actionPosition: 'right',
    actionIcon: iconMapping['chevron-left'],
    styles: {
      price: {
        textVariant: 'h6',
        color: 'primary-default',
      },
      title: {
        textVariant: 'body',
        color: 'default-hero',
      },
      description: {
        textVariant: 'caption',
        color: 'primary-default',
      },
    },
  },
}

export const AlgarRechargeAlternative: Story = {
  decorators: [ThemeDecorator('algar')],
  args: {
    onSelect: fn(),
    price: 'R$ 30,00',
    priceLabel: 'MELHOR OFERTA',
    textAlign: 'left',
    gap: '2xs',
    title: 'Validade dos créditos: 90 dias',
    padding: 'xs',
    minWidth: 350,
    radius: 'lg',
    verticalAlign: 'start',
    horizontalAlign: 'start',
    actionPosition: 'right',
    actionIcon: iconMapping['chevron-left'],
    styles: {
      price: {
        textVariant: 'h6',
        color: 'primary-onColor',
      },
      title: {
        textVariant: 'body',
        color: 'disabled-default',
      },
      action: {
        textVariant: 'body',
        color: 'primary-onColor',
      },
    },
    background: 'pageAlternative',
  },
}

export const TelcelRecharge: Story = {
  decorators: [ThemeDecorator('telcel')],
  args: {
    onSelect: fn(),
    textAlign: 'center',
    price: '$50',
    title: 'Vigencia de 30 días',
    description: '1GB en redes \r\nsociales',
    verticalAlign: 'center',
    horizontalAlign: 'center',
    gap: 'xs',
    radius: 'sm',
    padding: 'sm',
    minHeight: 120,
    minWidth: 120,
    styles: {
      price: {
        textVariant: 'h5',
      },
      title: {
        textVariant: 'body',
        color: 'disabled-default',
      },
      description: {
        textVariant: 'caption',
        color: 'primary-default',
      },
    },
  },
}
