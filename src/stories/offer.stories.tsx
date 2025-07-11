import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  borderRadiusValuesTokens,
  spacingValuesTokens,
} from 'theme-token-manager'

import ThemeDecorator from '../../.storybook/decorators/theme-decorator'
import Offer from '../examples/offer'
import { iconMapping, iconOptions } from '../icons'

const meta = {
  title: 'examples/offer',
  component: Offer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    radius: { options: borderRadiusValuesTokens },
    padding: { options: spacingValuesTokens },
    gap: { options: spacingValuesTokens },
    isSelected: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    price: {
      control: 'text',
    },
    oldPrice: {
      control: 'text',
    },
    order: {
      control: 'object',
      description: 'display order',
    },
    actionColor: {
      control: 'select',
      options: ['primary', 'secondary', 'none'],
    },
    actionIconPosition: {
      control: 'select',
      options: ['start', 'end'],
    },
    actionText: {
      control: 'text',
    },
    actionVariant: {
      control: 'select',
      options: ['filled', 'text', 'outlined'],
    },
    actionIcon: {
      options: iconOptions,
      mapping: iconMapping,
    },
    actionIconSelected: {
      options: iconOptions,
      mapping: iconMapping,
    },
    actionRadius: {
      options: borderRadiusValuesTokens,
    },
    config: {
      control: 'object',
      description: 'styling properties for customize each offer property',
    },
  },
  args: { onSelect: fn() },
} satisfies Meta<typeof Offer>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultOffer: Story = {
  args: {
    padding: '2xs',
    gap: '3xs',
    title: 'Netflix',
    price: 'R$10,00 com a Wave',
    oldPrice: 'R$20,90',
    actionText: 'Contratar agora',
    actionIcon: iconMapping['chevron-left'],
    actionVariant: 'text',
    actionColor: 'secondary',
    radius: 'sm',
    order: [['image'], ['title'], ['oldPrice'], ['price'], ['description']],
    config: {
      image: {
        src: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        width: '100%',
        height: '120px',
        radius: '2xs',
      },
      title: {
        fontWeight: 'bold',
        textVariant: 'bodyLong',
      },
      oldPrice: {
        icon: iconMapping['info-circle'],
        iconPosition: 'end',
        textVariant: 'caption',
        textDecoration: 'line-through',
        color: 'disabled-default',
      },
    },
  },
}

export const NioOffer: Story = {
  decorators: [ThemeDecorator('nio')],
  args: {
    id: 'offer-1',
    padding: '2xs',
    gap: '3xs',
    title: 'Netflix',
    price: 'R$15,00 com a Nio',
    oldPrice: 'R$20,90',
    description: 'Economize R$5,90',
    actionText: '',
    actionIcon: iconMapping.plus,
    actionIconSelected: iconMapping.minus,
    actionVariant: 'text',
    actionRadius: 'pill',
    radius: 'sm',
    order: [['image'], ['title'], ['oldPrice'], ['price'], ['description']],
    config: {
      image: {
        src: 'https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456',
        width: '30px',
        height: '30px',
        radius: '2xs',
      },
      title: {
        fontWeight: 'bold',
        textVariant: 'bodyLong',
        marginBottom: '2xs',
      },
      description: {
        icon: iconMapping['dollar-sign'],
        iconPosition: 'start',
        textVariant: 'caption',
        fontWeight: 'medium',
        color: 'accent-onColorSubtle',
        marginTop: '3xs',
        marginBottom: '3xs',
      },
      oldPrice: {
        icon: iconMapping['info-circle'],
        iconPosition: 'end',
        textVariant: 'caption',
        textDecoration: 'line-through',
        color: 'disabled-default',
      },
    },
  },
}

export const TelcelOffer: Story = {
  decorators: [ThemeDecorator('telcel')],
  args: {
    padding: 'md',
    gap: 'xs',
    title: 'Revisteando',
    description: 'Kiosko con los mejores títulos de revistas.',
    actionText: 'Lo quiero',
    actionIcon: iconMapping['arrow-right'],
    actionIconPosition: 'end',
    actionVariant: 'text',
    actionColor: 'secondary',
    radius: 'lg',
    order: [['title'], ['description']],
    config: {
      title: {
        textVariant: 'bodyLong',
        fontWeight: 'bold',
        color: 'primary-default',
      },
      description: {
        fontWeight: 'medium',
        marginBottom: 'xs',
      },
    },
  },
}
