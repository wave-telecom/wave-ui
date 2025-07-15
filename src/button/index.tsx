import { cx, css } from '@emotion/css'
import React, { ReactNode } from 'react'
import { BorderRadiusValues } from 'theme-token-manager'
import { FontValues } from 'theme-token-manager/theme/types'

import { useTheme } from '../hooks/theme'
import { getTransparencyColor } from '../utils/getTransparencyColor'

export type ButtonPadding =
  | 'none'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

export type SizeVariants = 'small' | 'normal' | 'large'
export type ButtonColor = 'primary' | 'secondary' | 'none'
export type ButtonVariant = 'filled' | 'text' | 'outlined'

export type ButtonProps = {
  startIcon?: ReactNode
  endIcon?: ReactNode
  size?: SizeVariants
  color?: ButtonColor
  horizontalPadding?: ButtonPadding
  verticalPadding?: ButtonPadding
  variant?: ButtonVariant
  radius?: BorderRadiusValues
  onClick?: () => void
  children?: React.ReactNode
  disabled?: boolean
  className?: string
}

const Button = ({
  onClick,
  children,
  startIcon,
  endIcon,
  color = 'primary',
  variant = 'filled',
  size = 'normal',
  radius = 'none',
  disabled = false,
  horizontalPadding = 'xs',
  verticalPadding = '2xs',
  className,
}: ButtonProps) => {
  const { mode, theme } = useTheme()
  const sizeSelector: Record<SizeVariants, FontValues> = {
    small: 'bodyShort',
    normal: 'body',
    large: 'bodyLong',
  }

  const buttonColor = disabled ? 'disabled' : color

  const getCssCursor = () => (disabled ? 'default' : 'pointer')

  const getCssRadius = () =>
    radius ? `border-radius: ${theme.size.border.radius[radius]}px;` : ''

  const bgColor = () => {
    if (buttonColor === 'none') {
      return 'inherit'
    }

    return variant == 'filled'
      ? theme.palette.surface[`${buttonColor}-default`]
      : 'inherit'
  }

  const textColor = () => {
    if (buttonColor === 'none') {
      return 'inherit'
    }

    return variant == 'filled'
      ? theme.palette.text[`${buttonColor}-onColor`]
      : theme.palette.surface[`${buttonColor}-default`]
  }

  const getCssHover = () => {
    const transparencyColor = getTransparencyColor(mode)

    if (disabled || color === 'none') return ''

    if (variant === 'filled')
      return `&:hover {
      background-color: ${theme.palette.surface[`${color}-defaultHover`]};
      color: ${theme.palette.text[`${color}-onColorHover`]};
    }`

    return `&:hover {
      background-color: ${transparencyColor};
    }`
  }

  const getCssBorder = () => {
    return variant === 'outlined'
      ? `border-width: ${theme.size.border.width.xs}px;
         border-color: ${color === 'none' ? '' : theme.palette.border[`${color}-default`]};
         border-style: solid;`
      : ''
  }

  const styles = css`
    border: 0;
    font-family: ${theme.font.family[sizeSelector[size]]};
    font-size: ${theme.font.size[sizeSelector[size]]}px;
    line-height: ${theme.font.height[sizeSelector[size]]}px;
    letter-spacing: ${theme.font.spacing[sizeSelector[size]]}px;
    font-weight: ${theme.font.weight[sizeSelector[size]]};
    padding-inline: ${horizontalPadding === 'none'
      ? 0
      : theme.size.spacing[horizontalPadding]}px;
    padding-block: ${verticalPadding === 'none'
      ? 0
      : theme.size.spacing[verticalPadding]}px;
    transition: all 0.2s ease-in-out;
    color: ${textColor()};
    background-color: ${bgColor()};
    display: flex;
    gap: ${theme.size.spacing['3xs']}px;
    cursor: ${getCssCursor()};
    ${getCssBorder()}
    ${getCssRadius()}
    ${getCssHover()}
  `

  return (
    <button
      className={cx(styles, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  )
}

export default Button
