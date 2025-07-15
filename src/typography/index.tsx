import { css, cx } from '@emotion/css'
import { createElement, CSSProperties, memo, type ReactNode } from 'react'

import { useTheme } from '../hooks/theme'
import { Theme } from '../types'

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'hyperlink'
  | 'hyperlinkHover'
  | 'body'
  | 'bodyShort'
  | 'bodyLong'
  | 'label'
  | 'labelLong'
  | 'caption'

const getElement = (variant: TypographyVariant) => {
  const elements: Record<TypographyVariant, string> = {
    body: 'p',
    bodyShort: 'p',
    bodyLong: 'p',
    hyperlink: 'span',
    hyperlinkHover: 'span',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    label: 'span',
    labelLong: 'span',
    caption: 'span',
  }

  return elements[variant]
}

export type TypographyProps = {
  variant?: TypographyVariant
  className?: string
  style?: CSSProperties
  children: ReactNode
}

const BaseTypography = ({
  variant = 'body',
  children,
  className,
  style,
}: TypographyProps) => {
  const element = createElement(
    getElement(variant),
    { className, style },
    children
  )

  return element
}

const styles = (theme: Theme, variant?: TypographyVariant) => css`
  font-family: ${theme.font.family[variant ?? 'body']};
  font-size: ${theme.font.size[variant ?? 'body']}px;
  font-weight: ${theme.font.weight[variant ?? 'body']};
  line-height: ${theme.font.height[variant ?? 'body']}px;
  letter-spacing: ${theme.font.spacing[variant ?? 'body']}px;
  margin: unset;
`

const Typography = ({ className, ...props }: TypographyProps) => {
  const { theme } = useTheme()

  return (
    <BaseTypography
      className={cx(styles(theme, props.variant), className)}
      {...props}
    />
  )
}

export default memo(Typography)
