<div align="center">
  <a href="https://github.com/wave-telecom/wave-ui">
    <img src="./static/images/w.png" alt="Wave UI Logo" height="80">
  </a>
</div>

<h1 align="center">Wave UI</h1>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<p align="center">
  <strong>Wave UI</strong> is a React component library designed by and for Wavers, providing consistency and flexibility across multiple products.
</p>

## Getting Started

### Peer Dependencies

Wave UI requires `react` and `react-dom` as peer dependencies. Please ensure they are installed in your project:

```json
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
}
```

### Installation

Install Wave UI using your preferred package manager:

```sh
npm install @wave-telecom/ui
# or
yarn add @wave-telecom/ui
# or
pnpm add @wave-telecom/ui
```

### Next extra configuration (installation from git as package)

If you installed this package from github repository, you'll need to add the package into the `transpilePackages` list parameters into `next.config.js` file:

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@wave-telecom/ui'], // <-- this line
}
```

### Configuring the Theme Provider

To use Wave UI's theme management, wrap your application with the `ThemeProvider`.
You can create a custom theme using [`src/theme/wave.ts`](src/theme/wave.ts) as an example.

```tsx
import { ThemeProvider } from '@wave-telecom/ui'
import { theme } from './theme'

function AppRoot() {
  return (
    <ThemeProvider initialMode="dark" initialTheme={theme}>
      <App />
    </ThemeProvider>
  )
}
```

### Using the Theme Hook

Access the theme in your components using the `useTheme` hook:

```tsx
import { css } from '@emotion/css'
import { useTheme } from '@wave-telecom/ui'

const MyComponent = () => {
  const { theme } = useTheme()

  return (
    <div
      className={css`
        background-color: ${theme.palette.surface.page};
      `}
    >
      {/* your component */}
    </div>
  )
}
```

### Configuring Css Variables injection

If you need to work with the tokens into css files, you can use the `CssBaseline` injector to populate the tokens as css variables:

```tsx
import { ThemeProvider, CssBaseLine } from '@wave-telecom/ui'
import { theme } from './theme'

function AppRoot() {
  return (
    <ThemeProvider initialMode="dark" initialTheme={theme}>
      <CssBaseLine mode="light">
        <App />
      <CssBaseLine>
    </ThemeProvider>
  )
}
```

Available variables:

| Token Example Format                               | Description / Variations                                                                                                                                                                                                                               |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `--PREFIX-color-PALLETE_PATH`                      | Color variable. PALLETE_PATH: e.g. `surface-primary-default`                                                                                                                                                                                           |
| `--PREFIX-font-FONT_PROPERTY-FONT_VARIATION`       | Font variable. FONT_PROPERTY: `family`, `spacing`, `paragraphSpacing`, `size`, `weight`, `height`. FONT_VARIATION: `label`, `labelLong`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `hyperlink`, `hyperlinkHover`, `caption`, `body`, `bodyShort`, `bodyLong` |
| `--PREFIX-size-spacing-SPACING_VARIATIONS`         | Spacing variable. SPACING_VARIATIONS: `4xs`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`                                                                                                                                           |
| `--PREFIX-size-DIMENSION_VALUES`                   | Dimension variable. DIMENSION_VALUES: `0`, `25`, `50`, `100`, `150`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`, `1000`, `1100`, `1200`, `1300`, `1400`, `1500`, `1600`, `1700`, `1800`, `1900`                                            |
| `--PREFIX-size-border-width-BORDER_WIDTH_VALUES`   | Border width variable. BORDER_WIDTH_VALUES: `xs`, `sm`, `md`                                                                                                                                                                                           |
| `--PREFIX-size-border-radius-BORDER_RADIUS_VALUES` | Border radius variable. BORDER_RADIUS_VALUES: `none`, `3xs`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `pill`                                                                                                                          |

- `PREFIX` is optional and can be omitted or replaced as needed.
- Replace the uppercase placeholders with the desired value from the corresponding variation list.

#### Tailwind classes

We provide a css class mapper using the tailwind pattern, you can just import the file [`tailwind-css-mapper.css`](./src/css/tailwind-css-mapper.css) and style the components.

```tsx
import '@wave-telecom/ui/css/tailwind-css-mapper.css'
```

### Setup Wave UI with Next.js

Wave UI uses the Emotion library for styling.
When working with Next.js, configure a cache provider to support SSR.
See the [Emotion SSR documentation](https://emotion.sh/docs/ssr) for setup instructions.

### Running tests

---

## Theme Palette Guide

You can access the theme using the `useTheme` hook.
The `theme.palette` property contains the following suffixes:

| Token Suffix            | Description                      | Observation                 |
| :---------------------- | :------------------------------- | :-------------------------- |
| `default`               | Main color value                 | Ex: `primary-default`       |
| `hover`                 | Color on hover event             | Ex: lighter or darker color |
| `defaultSubtle`         | --                               |                             |
| `defaultSubtleHover`    | --                               |                             |
| `defaultSubtleHoverAlt` | --                               |                             |
| `onColor`               | Contrast color for a given color | Ex: `primary-onColor`       |
| `onColorHover`          | Hover color for contrast color   |                             |
| `onColorSubtle`         | --                               |                             |
| `onColorSubtleHover`    | --                               |                             |
| `hero`                  | --                               |                             |
| `body`                  | Default color for body text      |                             |
| `heading`               | Default color for headings       |                             |
| `caption`               | Default color for captions       |                             |
| `placeholder`           | Default color for placeholders   |                             |

## Contributing Guidelines

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Test the library locally:
   - Build: `npm run build`
   - Copy the local path: `pwd`
   - Install in your consumer app: `npm i </path/to/wave-telecom/ui>`
   - Test in the consumer app
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Links

- [Wave UI Documentation](https://github.com/wave-telecom/wave-ui)
- [Emotion SSR Setup](https://emotion.sh/docs/ssr)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/wave-telecom/wave-ui.svg?style=for-the-badge
[contributors-url]: https://github.com/wave-telecom/wave-ui/graphs/contributors
[stars-shield]: https://img.shields.io/github/stars/wave-telecom/wave-ui.svg?style=for-the-badge
[stars-url]: https://github.com/wave-telecom/wave-ui/stargazers
[issues-shield]: https://img.shields.io/github/issues/wave-telecom/wave-ui.svg?style=for-the-badge
[issues-url]: https://github.com/wave-telecom/wave-ui/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/wave-by-bemobi
