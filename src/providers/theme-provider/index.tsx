import { PropsWithChildren } from 'react'
import { ThemeProvider as TokenProvider, type Theme } from 'theme-token-manager'

import { waveTheme } from '../../theme'
import ModeProvider from '../mode'

type ThemeProviderProps = {
  initialMode?: 'light' | 'dark'
  initialTheme?: Theme
}

const ThemeProvider = ({
  children,
  initialMode,
  initialTheme = waveTheme,
}: PropsWithChildren<ThemeProviderProps>) => {
  return (
    <TokenProvider theme={initialTheme}>
      <ModeProvider mode={initialMode}>{children}</ModeProvider>
    </TokenProvider>
  )
}

export default ThemeProvider
