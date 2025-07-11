import { ResultTheme, ThemePalette } from 'theme-token-manager/theme/types'

export type Theme = Omit<ResultTheme, 'palette'> & {
  palette: ThemePalette<string>
}
