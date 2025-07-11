import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { FaPlus } from 'react-icons/fa'
import { afterEach, describe, expect, it, vi } from 'vitest'

import IconButton from '.'

describe('IconButton', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render', async () => {
    render(<IconButton icon={<FaPlus />} ariaLabel="click me" />)

    expect(screen.getByRole('button')).toBeDefined()
  })

  it('should be clickable', async () => {
    const handleClick = vi.fn()

    render(
      <IconButton
        icon={<FaPlus />}
        ariaLabel="click me"
        onClick={handleClick}
      />
    )
    const button = await screen.getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toBeCalledTimes(1)
  })
})
