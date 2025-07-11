import { algarTheme, nioTheme, telcelTheme, waveTheme } from '../../src/theme'

export const themes = {
  wave: waveTheme,
  nio: nioTheme,
  algar: algarTheme,
  telcel: telcelTheme,
}

export type ThemeValues = 'wave' | 'nio' | 'algar' | 'telcel'
