import { cx, css } from '@emotion/css'

import Typography, { TypographyProps } from '../../../typography'

type OfferTextProps = {
  weight?: number
  color?: string
  textDecoration?: string
  marginBottom?: number
  marginTop?: number
} & TypographyProps

const OfferText = ({
  weight,
  color,
  textDecoration,
  marginBottom,
  marginTop,
  className,
  ...props
}: OfferTextProps) => {
  const styles = css`
    ${weight ? `font-weight: ${weight};` : ''}
    ${color ? `color: ${color};` : ''}
        ${textDecoration ? `text-decoration: ${textDecoration};` : ''}
        margin: unset;
    display: flex;
    gap: 4px;
    ${marginBottom ? `margin-bottom: ${marginBottom}px;` : ''}
    ${marginTop ? `margin-top: ${marginTop}px;` : ''}
  `
  return <Typography {...props} className={cx(styles, className)} />
}

export default OfferText
