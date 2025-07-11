import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import Button from '.'

describe('Button', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render', async () => {
    render(<Button>Click Me</Button>)

    expect(screen.getByText('Click Me')).toBeDefined()
  })

  it('should be clickable', async () => {
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click Me</Button>)
    const button = await screen.getByText('Click Me')

    fireEvent.click(button)

    expect(handleClick).toBeCalledTimes(1)
  })

  it('should not be clickable when disabled', async () => {
    const handleClick = vi.fn()

    render(
      <Button disabled onClick={handleClick}>
        Click Me
      </Button>
    )
    const button = await screen.getByText('Click Me')

    fireEvent.click(button)

    expect(handleClick).toBeCalledTimes(0)
  })
})
