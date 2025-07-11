import { createContext } from 'react'

export type ModeContextValues = {
  mode: 'light' | 'dark'
  setMode: (_mode: 'light' | 'dark') => void
  toggle: () => void
}

export const ModeContext = createContext<ModeContextValues | null>(null)
