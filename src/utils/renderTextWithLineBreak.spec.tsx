import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { renderTextWithLineBreak } from './renderTextWithLineBreak'

describe('renderTextWithLineBreak', () => {
  it('should not add separators to a text without line break', () => {
    render(<>{renderTextWithLineBreak('A simple text with no line break')}</>)

    const breaks = screen.queryAllByRole('separator')

    expect(breaks.length).toBe(0)
  })

  it('should add separators to a text with line breaks', () => {
    render(<>{renderTextWithLineBreak('A simple text \nwith line\n breaks')}</>)

    const breaks = screen.queryAllByTestId('line-break')

    expect(breaks.length).toBe(2)
  })
})
