import { PropsWithChildren } from 'react'
import { ThemeProvider as TokenProvider, type Theme } from 'theme-token-manager'

import ModeProvider from '@/providers/mode'
import { waveTheme } from '@/theme'

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
