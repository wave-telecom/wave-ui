import { cleanup, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import Typography from '.'

describe('typography', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should render a text', () => {
    render(<Typography>text</Typography>)

    expect(screen.getByText('text')).toBeDefined()
  })

  it('should render a h1 element', () => {
    render(<Typography variant="h1">Title</Typography>)

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
  })

  it('should render a span when as is provided with body value', () => {
    render(
      <Typography variant="h4" as="span">
        Title
      </Typography>
    )

    const element = screen.getByText('Title')
    expect(element.tagName.toLowerCase()).toBe('span')
  })
})
