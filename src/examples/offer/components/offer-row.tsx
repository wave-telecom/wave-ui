import { css, cx } from '@emotion/css'
import { SpacingValues } from 'theme-token-manager'

import { Theme } from '@/types'

type OfferRowProps = {
  theme: Theme
  gap: SpacingValues
  className?: string
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const OfferRow = ({ theme, gap, className, ...props }: OfferRowProps) => {
  return (
    <div
      className={cx(
        css`
          display: flex;
          flex-direction: row;
          justify-items: center;
          gap: ${theme.size.spacing[gap]}px;
        `,
        className
      )}
      {...props}
    />
  )
}
export default OfferRow
