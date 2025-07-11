import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Typography from '.'

describe('typography', () => {
  it('should render a text', () => {
    render(<Typography>text</Typography>)

    expect(screen.getByText('text')).toBeDefined()
  })

  it('should render a h1 element', () => {
    render(<Typography variant="h1">Title</Typography>)

    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
  })
})
