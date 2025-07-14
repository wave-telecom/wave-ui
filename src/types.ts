import {
  ResultTheme,
  ThemePalette,
  Theme as TokenTheme,
  ColorValues,
  ThemeColorValue,
  ThemePaletteBorder,
  ThemePaletteBorderValues,
  BaseThemeConfig,
  FontValues,
  FoundationValues,
  NestedOptional,
  PartialTheme,
  ThemePaletteIcon,
  ThemePaletteIconValues,
  ThemePaletteSurface,
  ThemePaletteSurfaceValues,
  ThemePaletteText,
  ThemePaletteTextValues,
} from 'theme-token-manager/theme/types'

type Theme = Omit<ResultTheme, 'palette'> & {
  palette: ThemePalette<string>
}

type InputTheme = TokenTheme

export type {
  ResultTheme,
  InputTheme,
  Theme,
  BaseThemeConfig,
  ColorValues,
  FontValues,
  FoundationValues,
  NestedOptional,
  PartialTheme,
  ThemeColorValue,
  ThemePalette,
  ThemePaletteBorder,
  ThemePaletteBorderValues,
  ThemePaletteIcon,
  ThemePaletteIconValues,
  ThemePaletteSurface,
  ThemePaletteSurfaceValues,
  ThemePaletteText,
  ThemePaletteTextValues,
}
