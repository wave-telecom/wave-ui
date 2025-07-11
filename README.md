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

### Setup Wave UI with Next.js

Wave UI uses the Emotion library for styling.
When working with Next.js, configure a cache provider to support SSR.
See the [Emotion SSR documentation](https://emotion.sh/docs/ssr) for setup instructions.

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
