import { useTheme as useTokenTheme } from 'theme-token-manager'

import { useMode } from '../mode'

export const useTheme = () => {
  const { mode } = useMode()
  const { theme } = useTokenTheme()

  return {
    mode,
    base: {
      colorCollection: {
        ...theme.base.color?.collection,
      },
      colorFoundations: {
        ...theme.base.color?.foundations,
      },
      font: {
        ...theme.base.font,
      },
    },
    color: {
      ...theme.color,
    },
    theme: {
      ...theme,
      palette: {
        ...theme.palette[mode],
      },
    },
  }
}
