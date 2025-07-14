import { cx } from '@emotion/css'
import React from 'react'
import { BorderRadiusValues, SpacingValues } from 'theme-token-manager'

import { useTheme } from '../hooks/theme'
import { Theme } from '../types'

import {
  cardContentStyles,
  selectedGradientStyles,
  selectedSolidStyles,
  styles,
} from './styles'

export type CardProps = React.PropsWithChildren<{
  isSelected: boolean
  selectedVariant?: 'solid' | 'gradient'
  radius: BorderRadiusValues
  padding: SpacingValues
  gap?: SpacingValues
  minWidth?: number
  minHeight?: number
  containerClassName?: string
  className?: string
  direction?: 'column' | 'row'
  background?: 'page' | 'pageAlternative'
  onClick?: () => void
}>

const Card = ({
  children,
  radius,
  isSelected,
  padding,
  minHeight,
  minWidth,
  containerClassName,
  className,
  onClick,
  selectedVariant = 'gradient',
  direction = 'column',
  gap = '3xs',
  background,
}: CardProps) => {
  const { theme } = useTheme()

  const getSelectedStyle = (theme: Theme) => {
    if (selectedVariant === 'gradient')
      return selectedGradientStyles(theme, background)

    return selectedSolidStyles(theme)
  }

  return (
    <div
      className={cx(
        styles(theme, radius, !!onClick),
        isSelected && getSelectedStyle(theme),
        containerClassName
      )}
      data-testid="card-container"
      onClick={onClick}
    >
      <div
        data-testid="card-content"
        className={cx(
          cardContentStyles(
            theme,
            padding,
            gap,
            minHeight,
            minWidth,
            direction,
            background
          ),
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Card
