import { css, cx } from '@emotion/css'
import { ReactNode } from 'react'
import { BorderRadiusValues } from 'theme-token-manager'

import { useTheme } from '@/hooks/theme'

export type IconButtonColor = 'primary' | 'secondary' | 'none'
export type IconButtonVariant = 'filled' | 'text' | 'outlined'
export type IconButtonPadding =
  | 'none'
  | '3xs'
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'

export type IconButtonPros = {
  icon: ReactNode
  onClick?: () => void
  color?: IconButtonColor
  horizontalPadding?: IconButtonPadding
  verticalPadding?: IconButtonPadding
  variant?: IconButtonVariant
  radius?: BorderRadiusValues
  disabled?: boolean
  className?: string
  ariaLabel: string
}

const IconButton = ({
  icon,
  onClick,
  className,
  ariaLabel,
  horizontalPadding = 'none',
  verticalPadding = 'none',
  disabled = false,
  color = 'none',
  variant = 'text',
  radius = 'none',
}: IconButtonPros) => {
  const { mode, theme } = useTheme()

  const buttonColor = disabled ? 'disabled' : color

  const getCssCursor = () => (disabled ? 'default' : 'pointer')

  const getCssRadius = () =>
    radius ? `border-radius: ${theme.size.border.radius[radius]}px;` : ''

  const getBgColor = () => {
    if (variant === 'filled' && buttonColor !== 'none') {
      return theme.palette.icon[`${buttonColor}-default`]
    }

    return 'inherit'
  }

  const getTextColor = () => {
    if (variant === 'filled' && buttonColor !== 'none')
      return theme.palette.text[`${buttonColor}-onColor`]

    if (
      (variant === 'text' || variant === 'outlined') &&
      buttonColor !== 'none'
    )
      return theme.palette.surface[`${buttonColor}-default`]

    return 'inherit'
  }

  const getCssHover = () => {
    const transparencyColor =
      mode === 'dark' ? 'rgb(255, 255, 255, 5%)' : 'rgb(0, 0, 0, 5%)'

    if (disabled) return ''

    if (variant === 'filled' && color !== 'none')
      return `&:hover {
      background-color: ${theme.palette.surface[`${color}-defaultHover`]};
      color: ${theme.palette.icon[`${color}-onColorHover`]};
    }`

    return `&:hover {
      background-color: ${transparencyColor};
    }`
  }

  const getCssBorder = () => {
    return variant === 'outlined'
      ? `border-width: ${theme.size.border.width.xs}px;
         border-color: ${color === 'none' ? 'inherit' : theme.palette.border[`${color}-default`]};
         border-style: solid;`
      : ''
  }

  const style = css`
    border: 0;
    width: fit-content;
    height: fit-content;
    padding-inline: ${horizontalPadding === 'none'
      ? 0
      : theme.size.spacing[horizontalPadding]}px;
    padding-block: ${verticalPadding === 'none'
      ? 0
      : theme.size.spacing[verticalPadding]}px;
    transition: all 0.2s ease-in-out;
    color: ${getTextColor()};
    background-color: ${getBgColor()};
    display: flex;
    gap: ${theme.size.spacing['3xs']}px;
    cursor: ${getCssCursor()};
    ${getCssBorder()}
    ${getCssRadius()}
    ${getCssHover()}
  `

  return (
    <button
      disabled={disabled}
      color={color}
      onClick={onClick}
      className={cx(style, className)}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  )
}

export default IconButton
