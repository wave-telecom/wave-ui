import React, { ReactNode } from 'react'
import {
  BorderRadiusValues,
  FontWeight,
  SpacingValues,
} from 'theme-token-manager'
import { ThemePaletteTextValues } from 'theme-token-manager/theme/types'

import Button, { ButtonColor } from '../../button'
import Card from '../../card'
import { useTheme } from '../../hooks/theme'
import IconButton from '../../icon-button'
import { TypographyVariant } from '../../typography'

import OfferImage from './components/offer-image'
import OfferRow from './components/offer-row'
import OfferText from './components/offer-text'

const orderValues = [
  'image',
  'title',
  'description',
  'oldPrice',
  'price',
] as const

type OrderValues = (typeof orderValues)[number]

const defaultOrder: OrderValues[][] = [
  ['image'],
  ['title'],
  ['oldPrice'],
  ['price'],
  ['description'],
]

type OfferTextProps = {
  icon?: ReactNode
  iconPosition?: 'start' | 'end'
  textVariant?: TypographyVariant
  fontWeight?: FontWeight
  textDecoration?: 'none' | 'line-through' | 'underline'
  color?: ThemePaletteTextValues
  marginTop?: SpacingValues
  marginBottom?: SpacingValues
}

type OfferImageProps = {
  src: string
  width: string
  height: string
  radius?: BorderRadiusValues
}

type OfferProps = {
  id?: string
  isSelected?: boolean
  title?: string | ReactNode
  description?: string | ReactNode
  oldPrice?: string | ReactNode
  price?: string | ReactNode
  actionText?: string
  actionVariant?: 'filled' | 'text' | 'outlined'
  actionRadius?: BorderRadiusValues
  actionColor?: ButtonColor
  actionIcon?: ReactNode
  actionIconSelected?: ReactNode
  actionIconPosition?: 'start' | 'end'
  radius?: BorderRadiusValues
  order?: OrderValues[][]
  padding: SpacingValues
  gap: SpacingValues
  minHeight?: number
  minWidth?: number
  config?: {
    image?: OfferImageProps
    title?: OfferTextProps
    price?: OfferTextProps
    oldPrice?: OfferTextProps
    description?: OfferTextProps
  }
  onSelect: () => void
}

const Offer = ({
  radius = 'none',
  padding = 'sm',
  gap = '3xs',
  order = defaultOrder,
  onSelect,
  config,
  actionText,
  actionIconPosition,
  actionIcon,
  minWidth,
  minHeight,
  actionIconSelected,
  actionRadius = 'none',
  actionVariant = 'filled',
  actionColor = 'primary',
  isSelected = false,
  ...props
}: OfferProps) => {
  const {
    base: { font },
    theme,
  } = useTheme()

  const handleSelect = () => {
    if (!onSelect) return

    onSelect()
  }

  const orderMapper: Partial<Record<OrderValues, string | number | ReactNode>> =
    {
      ...orderValues.reduce((prev, value) => {
        if (value === 'image') return prev
        return props?.[value] ? { ...prev, [value]: props[value] } : prev
      }, {}),
    }

  const RenderImage = (config?: OfferImageProps) => {
    if (!config?.src) {
      return <React.Fragment />
    }

    return (
      <OfferImage
        src={config.src}
        width={config?.width}
        height={config?.height}
        radius={theme.size.border.radius[config?.radius ?? 'none']}
      />
    )
  }

  const RenderText = (column: OrderValues, config?: OfferTextProps) => {
    return (
      <OfferText
        variant={config?.textVariant}
        textDecoration={config?.textDecoration}
        marginTop={
          config?.marginTop ? theme.size.spacing?.[config?.marginTop] : 0
        }
        marginBottom={
          config?.marginBottom ? theme.size.spacing?.[config?.marginBottom] : 0
        }
        weight={font?.weight?.[config?.fontWeight ?? 'regular']}
        color={theme.palette.text[config?.color ?? 'default-body']}
      >
        {config?.icon && config?.iconPosition === 'start' && (
          <>{config?.icon}</>
        )}
        {orderMapper[column]}
        {config?.icon && config?.iconPosition === 'end' && <>{config?.icon}</>}
      </OfferText>
    )
  }

  return (
    <Card
      radius={radius}
      isSelected={isSelected}
      padding={padding}
      gap={gap}
      minHeight={minHeight}
      minWidth={minWidth}
    >
      {order.map((row, index) => (
        <OfferRow theme={theme} gap={gap} key={index}>
          {row.map((column) => (
            <React.Fragment key={column}>
              {column === 'image'
                ? RenderImage(config?.[column])
                : RenderText(column, config?.[column])}
            </React.Fragment>
          ))}
        </OfferRow>
      ))}
      <div>
        {actionText ? (
          <Button
            onClick={handleSelect}
            color={actionColor}
            variant={actionVariant}
            radius={actionRadius}
            {...(actionIconPosition === 'start'
              ? {
                  startIcon: isSelected
                    ? (actionIconSelected ?? actionIcon)
                    : actionIcon,
                }
              : {
                  endIcon: isSelected
                    ? (actionIconSelected ?? actionIcon)
                    : actionIcon,
                })}
            horizontalPadding="none"
            verticalPadding="none"
          >
            {actionText}
          </Button>
        ) : (
          <IconButton
            ariaLabel="Select Offer"
            onClick={handleSelect}
            color={actionColor}
            icon={isSelected ? (actionIconSelected ?? actionIcon) : actionIcon}
            radius={actionRadius}
            variant={actionVariant}
            horizontalPadding="3xs"
            verticalPadding="3xs"
          />
        )}
      </div>
    </Card>
  )
}

export default Offer
