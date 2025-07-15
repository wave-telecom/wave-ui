import { ReactRenderer } from '@storybook/react-vite'
import { memo, ReactNode, useEffect, useState } from 'react'
import { PartialStoryFn } from 'storybook/internal/types'
import { ThemeProvider, useTheme } from 'theme-token-manager'

import { themes, ThemeValues } from './themes'

import { useMode } from '@/hooks/mode'
import ModeProvider from '@/providers/mode'

function BodyBackground({ mode }: { mode: 'light' | 'dark' }) {
  const { theme } = useTheme()
  const { setMode } = useMode()

  useEffect(() => {
    setMode(mode)
  }, [mode, setMode])

  useEffect(() => {
    const bgColor = theme.palette[mode].surface.default
    const color = theme.palette[mode].text['default-body']

    document.body.style.background = bgColor
    document.body.style.color = color
    const root = document.getElementById('storybook-root')
    if (root) {
      root.style.background = bgColor
      root.style.color = color
    }

    const docsStories = document.querySelectorAll('.docs-story')
    docsStories.forEach((el) => {
      ;(el as HTMLElement).style.background = bgColor
      ;(el as HTMLElement).style.color = color
    })
  }, [mode, theme])

  return null
}

const ThemeDecorator =
  (initialTheme?: ThemeValues) =>
  (
    Story: PartialStoryFn<ReactRenderer, { [x: string]: any }>,
    context: any
  ) => {
    const [component, setComponent] = useState<string>()
    const [theme, setTheme] = useState<ThemeValues>(initialTheme ?? 'wave')

    useEffect(() => {
      if (context.componentId === component) {
        setTheme(context.globals.theme)
      }
    }, [context.globals.theme])

    useEffect(() => {
      if (context.componentId !== component) {
        setComponent(context.componentId)
        setTheme(initialTheme ?? context.globals.theme ?? 'wave')
      }
    }, [context.componentId])

    const mode = context.globals.mode ?? 'light'

    return (
      <>
        {initialTheme === theme && (
          <span
            style={{
              top: 0,
              left: 0,
              position: 'fixed',
              marginLeft: '16px',
              marginTop: '16px',
              opacity: 0.5,
              zIndex: -1,
            }}
          >
            default theme: {initialTheme}
          </span>
        )}
        <StoryBookThemeProvider mode={mode} theme={theme}>
          <Story />
          <BodyBackground mode={mode} />
        </StoryBookThemeProvider>
      </>
    )
  }

const StoryBookThemeProvider = memo(
  ({
    mode,
    theme,
    children,
  }: {
    mode: 'light' | 'dark'
    theme: 'nio' | 'algar' | 'wave' | 'telcel'
    children?: ReactNode
  }) => {
    return (
      <>
        <ModeProvider mode={mode}>
          <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
        </ModeProvider>
      </>
    )
  }
)

export default ThemeDecorator
