'use client'
import { useContext } from 'react'

import { ModeContext, ModeContextValues } from '../../contexts/mode'

export const useMode = () => {
  const context = useContext(ModeContext)

  if (!context) {
    return {
      mode: 'light',
      setMode: () => {},
      toggle: () => {},
    } as ModeContextValues
  }

  return context
}
