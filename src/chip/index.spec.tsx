import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import Chip from '.'

describe('Chip', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render', () => {
    render(<Chip>Chip</Chip>)
    expect(screen.getByText('Chip')).toBeDefined()
  })

  it('should be able to click when provide a click event', () => {
    const handleClick = vi.fn()
    render(<Chip onClick={handleClick}>Chip</Chip>)
    const chip = screen.getByText('Chip')
    fireEvent.click(chip)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render with a custom className', () => {
    render(<Chip className="custom-class">Chip</Chip>)
    expect(screen.getByText('Chip').className).toContain('custom-class')
  })

  it('should render children correctly', () => {
    render(
      <Chip>
        <span>Inner</span>
      </Chip>
    )
    expect(screen.getByText('Inner')).toBeDefined()
  })

  it('should not call onClick if not provided', () => {
    render(<Chip>Chip</Chip>)
    const chip = screen.getByText('Chip')
    expect(() => fireEvent.click(chip)).not.toThrow()
  })
})
