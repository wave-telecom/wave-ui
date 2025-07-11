import { BorderRadiusValues, SpacingValues } from 'theme-token-manager'
import { FontValues } from 'theme-token-manager/theme/types'

export type ChipProps = {
  font?: FontValues
  color?: 'primary' | 'secondary'
  variant?: 'filled' | 'outlined'
  radius?: BorderRadiusValues
  verticalPadding?: SpacingValues
  horizontalPadding?: SpacingValues
  className?: string
  onClick?: () => void
}
