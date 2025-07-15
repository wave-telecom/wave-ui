import { css, cx } from '@emotion/css'
import { ReactNode } from 'react'
import { BorderRadiusValues, SpacingValues } from 'theme-token-manager'
import { ThemePaletteTextValues } from 'theme-token-manager/theme/types'

import { cardStyle, fontStyle, priceStyle } from './styles'

import Card from '@/card'
import Chip from '@/chip'
import { useTheme } from '@/hooks/theme'
import IconButton from '@/icon-button'
import { TypographyVariant } from '@/typography'
import { renderTextWithLineBreak } from '@/utils/renderTextWithLineBreak'

type RechargeStyle = {
  textVariant: TypographyVariant
  color?: ThemePaletteTextValues
}

type RechargeStyles = {
  price: RechargeStyle
  title: RechargeStyle
  description?: RechargeStyle
  action?: RechargeStyle
}

type RechargeProps = {
  price: string
  priceLabel?: string
  title: string
  description?: string
  textAlign: 'left' | 'center' | 'right'
  verticalAlign: 'start' | 'center' | 'end'
  horizontalAlign: 'start' | 'center' | 'end'
  isSelected?: boolean
  onSelect?: () => void
  radius?: BorderRadiusValues
  padding?: SpacingValues
  gap?: SpacingValues
  styles?: RechargeStyles
  minWidth?: number
  minHeight?: number
  actionIcon?: ReactNode
  actionPosition?: 'right' | 'bottom'
  background?: 'page' | 'pageAlternative'
}

const defaultStyle: RechargeStyles = {
  price: {
    textVariant: 'h6',
  },
  title: {
    textVariant: 'bodyShort',
  },
  description: {
    textVariant: 'body',
  },
}

const Recharge = ({
  radius = 'xs',
  isSelected = false,
  padding = '2xs',
  gap = '2xs',
  verticalAlign,
  horizontalAlign,
  price,
  title,
  description,
  minWidth,
  minHeight,
  textAlign,
  priceLabel,
  actionPosition,
  actionIcon,
  onSelect,
  background,
  styles = defaultStyle,
}: RechargeProps) => {
  const { theme } = useTheme()

  return (
    <Card
      selectedVariant="solid"
      padding={padding}
      radius={radius}
      isSelected={isSelected}
      minHeight={minHeight}
      minWidth={minWidth}
      direction={actionPosition === 'bottom' ? 'column' : 'row'}
      className={css`
        align-items: ${actionPosition === 'bottom' ? 'start' : 'center'};
      `}
      onClick={actionIcon ? undefined : onSelect}
      background={background}
    >
      <div
        className={cardStyle(
          theme,
          verticalAlign,
          horizontalAlign,
          textAlign,
          gap
        )}
      >
        <div
          className={cx(
            fontStyle(theme, styles.price.textVariant, styles.price.color),
            priceStyle(theme)
          )}
        >
          {price}
          {priceLabel && (
            <Chip
              font="caption"
              color="secondary"
              variant="filled"
              radius="pill"
              horizontalPadding="2xs"
              verticalPadding="3xs"
            >
              {priceLabel}
            </Chip>
          )}
        </div>
        <div
          className={fontStyle(
            theme,
            styles.title.textVariant,
            styles.title.color
          )}
        >
          {title}
        </div>
        {description && (
          <div
            className={fontStyle(
              theme,
              styles.description?.textVariant ?? 'body',
              styles.description?.color
            )}
          >
            {renderTextWithLineBreak(description)}
          </div>
        )}
      </div>
      {actionIcon && (
        <IconButton
          ariaLabel="Select Recharge"
          className={fontStyle(
            theme,
            styles.price.textVariant,
            styles.price.color
          )}
          icon={actionIcon}
          color="none"
          onClick={onSelect}
        />
      )}
    </Card>
  )
}

export default Recharge
