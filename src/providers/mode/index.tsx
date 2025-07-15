import { PropsWithChildren, useState } from 'react'

import { ModeContext } from '@/contexts/mode'

type ModeProviderProps = {
  mode?: 'light' | 'dark'
}

const ModeProvider = ({
  children,
  mode: initialMode = 'light',
}: PropsWithChildren<ModeProviderProps>) => {
  const [mode, setMode] = useState<'light' | 'dark'>(initialMode)

  const handleToggle = () => {
    setMode((prev) => {
      return prev === 'light' ? 'dark' : 'light'
    })
  }

  return (
    <ModeContext.Provider value={{ mode, setMode, toggle: handleToggle }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
