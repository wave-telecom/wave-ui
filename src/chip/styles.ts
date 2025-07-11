import { css } from '@emotion/css'

import { Theme } from '../types'
import { getTransparencyColor } from '../utils/getTransparencyColor'

import { ChipProps } from './types'

const stylesFilled = (
  props: ChipProps,
  theme: Theme,
  isClicklable: boolean
) => `
  color: ${theme.palette.text[`${props.color!}-onColor`]};
  background-color: ${theme.palette.surface[`${props.color!}-default`]};
${
  isClicklable
    ? `&:hover {
    background-color: ${theme.palette.surface[`${props.color!}-defaultHover`]};
  }`
    : ''
}
`

const stylesOutlined = (
  props: ChipProps,
  theme: Theme,
  mode: 'light' | 'dark',
  isClicklable: boolean
) => `
  color: ${theme.palette.text[`${props.color!}-default`]};
  border-width: ${theme.size.border.width.xs}px;
  border-style: solid;
  border-color: ${theme.palette.surface[`${props.color!}-default`]};

  ${
    isClicklable
      ? `&:hover {
    background-color: ${getTransparencyColor(mode)};
  }`
      : ''
  }

`

const styles = (
  props: ChipProps,
  theme: Theme,
  mode: 'light' | 'dark',
  isClicklable: boolean
) => css`
  font-size: ${theme.font.size[props.font ?? 'body']}px;
  font-weight: ${theme.font.weight[props.font ?? 'body']};
  font-family: ${theme.font.family[props.font ?? 'body']};
  letter-spacing: ${theme.font.spacing[props.font ?? 'body']}px;
  line-height: ${theme.font.height[props.font ?? 'body']}px;
  border-radius: ${theme.size.border.radius[props.radius!]}px;
  transition: background-color 0.2s ease-in-out;
  padding-inline: ${theme.size.spacing[props.horizontalPadding ?? '4xs']}px;
  padding-block: ${theme.size.spacing[props.verticalPadding ?? '4xs']}px;
  cursor: ${isClicklable ? 'pointer' : 'default'};

  ${props.variant === 'filled'
    ? stylesFilled(props, theme, isClicklable)
    : stylesOutlined(props, theme, mode, isClicklable)}
`

export default styles
