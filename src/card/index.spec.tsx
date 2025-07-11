import { cleanup, render, screen } from '@testing-library/react'
import { transformTheme, defaultTheme } from 'theme-token-manager'
import { afterEach, describe, expect, it } from 'vitest'

import Card from '.'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render', async () => {
    render(
      <Card isSelected={false} padding="2xl" radius="none">
        Card Content
      </Card>
    )

    expect(screen.getByText('Card Content')).toBeDefined()
  })

  it('should have the right padding', async () => {
    const theme = transformTheme(defaultTheme)

    render(
      <Card isSelected={false} padding="2xl" radius="none">
        Card Content
      </Card>
    )

    const card = screen.getByText('Card Content')
    const styles = window.getComputedStyle(card)

    expect(styles.padding).toContain(`${theme.size.spacing['2xl']}px`)
  })

  it('should have a gradient border color when selected', async () => {
    render(
      <Card
        isSelected={true}
        selectedVariant="gradient"
        padding="2xl"
        radius="none"
      >
        Card Content
      </Card>
    )

    const card = screen.getByTestId('card-container')
    const styles = window.getComputedStyle(card)

    expect(styles.borderColor).toContain(`rgba(0, 0, 0, 0)`)
    expect(styles.backgroundClip).toContain(`padding-box, border-box`)
    expect(styles.backgroundOrigin).toContain(`padding-box, border-box`)
    expect(styles.backgroundImage).toContain(`linear`)
  })
})
