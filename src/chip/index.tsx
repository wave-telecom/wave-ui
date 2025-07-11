import { cx } from '@emotion/css'
import { PropsWithChildren, useCallback } from 'react'

import { useTheme } from '../hooks/theme'

import styles from './styles'
import { ChipProps } from './types'

const Chip = ({
  children,
  className,
  onClick,
  ...props
}: PropsWithChildren<ChipProps>) => {
  const { theme, mode } = useTheme()

  const handleClick = useCallback(() => {
    if (!onClick) return

    onClick()
  }, [onClick])

  return (
    <div
      onClick={handleClick}
      className={cx(
        styles(props, theme, mode, !!onClick),
        className && className
      )}
    >
      {children}
    </div>
  )
}

export default Chip
