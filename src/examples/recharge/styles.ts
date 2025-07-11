import { css } from '@emotion/css'
import { SpacingValues } from 'theme-token-manager'
import {
  FontValues,
  ThemePaletteTextValues,
} from 'theme-token-manager/theme/types'

import { Theme } from '../../types'

export const fontStyle = (
  theme: Theme,
  font: FontValues,
  color?: ThemePaletteTextValues
) => css`
  font-size: ${theme.font.size[font]}px;
  font-weight: ${theme.font.weight[font]};
  font-family: ${theme.font.family[font]};
  line-height: ${theme.font.height[font]}px;
  letter-spacing: ${theme.font.spacing[font]}px;
  color: ${theme.palette.text[color ?? 'default-body']};
`

export const priceStyle = (theme: Theme) => css`
  display: flex;
  gap: ${theme.size.spacing['3xs']}px;
  align-items: center;
`

export const cardStyle = (
  theme: Theme,
  verticalAlign: 'start' | 'center' | 'end',
  horizontalAlign: 'start' | 'center' | 'end',
  textAlign: 'left' | 'center' | 'right',
  gap: SpacingValues
) => css`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: ${horizontalAlign};
  justify-content: ${verticalAlign};
  text-align: ${textAlign ?? 'left'};
  gap: ${theme.size.spacing[gap]}px;
`
