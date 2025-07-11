import { css } from '@emotion/css'

type OfferImageProps = {
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  radius?: number
}

const OfferImage = ({ src, alt, width, height, radius }: OfferImageProps) => {
  return (
    <img
      className={css`
        border-radius: ${radius ?? 0}px;
      `}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  )
}

export default OfferImage
