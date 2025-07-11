import { css } from '@emotion/css'
import { BorderRadiusValues, SpacingValues } from 'theme-token-manager'

import { Theme } from '../types'

export const selectedGradientStyles = (
  theme: Theme,
  background?: 'page' | 'pageAlternative'
) => css`
  border-color: transparent;
  background-image:
    linear-gradient(
      ${theme.palette.surface[background ?? 'page']},
      ${theme.palette.surface[background ?? 'page']}
    ),
    linear-gradient(
      45deg,
      ${theme.palette.surface['primary-default']},
      ${theme.palette.text['accent-default']}
    );
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`

export const selectedSolidStyles = (theme: Theme) => css`
  border-style: solid;
  border-width: ${theme.size.border.width.xs}px;
  border-color: ${theme.palette.border['primary-default']};
`

export const cardContentStyles = (
  theme: Theme,
  padding: SpacingValues,
  gap: SpacingValues,
  minHeight?: number,
  minWidth?: number,
  direction?: 'column' | 'row',
  background?: 'page' | 'pageAlternative'
) => css`
  font-family: ${theme.font.family.body};
  color: ${theme.palette.text['default-body']};
  background-color: ${theme.palette.surface[background ?? 'page']};
  display: flex;
  flex-direction: ${direction ?? 'column'};
  padding: ${theme.size.spacing[padding]}px;
  gap: ${theme.size.spacing[gap]}px;
  min-height: ${minHeight ? `${minHeight}px` : 'auto'};
  min-width: ${minWidth ? `${minWidth}px` : 'auto'};
`

export const styles = (
  theme: Theme,
  radius: BorderRadiusValues,
  isClickable: boolean
) => css`
  border-style: solid;
  border-width: ${theme.size.border.width.xs}px;
  border-color: ${theme.palette.border.default};
  border-radius: ${theme.size.border.radius[radius]}px;
  cursor: ${isClickable ? 'pointer' : 'default'};
  overflow: clip;
`
