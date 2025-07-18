import { colors, type Theme } from 'theme-token-manager'

const defaultFamily = {
  headline: 'Montserrat',
  content: 'Inter',
}

const defaultHeight = {
  '4xl': 74,
  '3xl': 58,
  '2xl': 46,
  xl: 38,
  lg: 30,
  md: 24,
  base: 20,
  sm: 18,
  xs: 16,
}

const defaultSpacing = {
  lg: 2,
  md: 1,
  xs: 0,
  base: 0,
}

const defaultWeight = {
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
}

const defaultParagraphSpacing = {
  base: 20,
}

const defaultDimensions = {
  '0': 0,
  '25': 1,
  '50': 2,
  '100': 4,
  '150': 6,
  '200': 8,
  '300': 12,
  '400': 16,
  '500': 20,
  '600': 24,
  '700': 28,
  '800': 32,
  '900': 36,
  '1000': 40,
  '1100': 48,
  '1200': 56,
  '1300': 64,
  '1400': 72,
  '1500': 96,
  '1600': 128,
  '1700': 256,
  '1800': 512,
  '1900': 1024,
}

export const waveTheme: Theme = {
  id: 'wave',
  name: 'wave',
  base: {
    color: {
      collection: {
        black: {
          '100': '#f5f5f5',
          '150': '#e0e0e0',
          '200': '#bdbdbd',
          '300': '#9e9e9e',
          '400': '#757575',
          '500': '#616161',
          '600': '#424242',
          '700': '#212121',
          '800': '#141414',
          '900': '#0a0a0a',
          '1000': '#000000',
          '1100': '#000000',
          '1200': '#000000',
        },
        blue: {
          '100': '#eaf6ff',
          '150': '#cceaff',
          '200': '#99d5ff',
          '300': '#66bfff',
          '400': '#33aaff',
          '500': '#0095ff',
          '600': '#0077cc',
          '700': '#005999',
          '800': '#003b66',
          '900': '#002233',
          '1000': '#00111a',
          '1100': '#000a0d',
          '1200': '#000508',
        },
        pink: {
          '100': '#fff0f6',
          '150': '#ffd6e7',
          '200': '#ffadd2',
          '300': '#ff85c0',
          '400': '#f759ab',
          '500': '#eb2f96',
          '600': '#c41d7f',
          '700': '#9e1068',
          '800': '#780650',
          '900': '#520339',
          '1000': '#2c001c',
          '1100': '#1a0010',
          '1200': '#0a0005',
        },
        grey: colors.grey,
        slate: colors.slate,
        red: colors.red,
        yellow: colors.yellow,
        green: colors.green,
      },
      foundations: {
        black: '#000000',
        white: '#ffffff',
      },
    },
    font: {
      family: defaultFamily,
      height: defaultHeight,
      spacing: defaultSpacing,
      paragraphSpacing: defaultParagraphSpacing,
      size: {
        '4xl': 72,
        '3xl': 56,
        '2xl': 44,
        xl: 36,
        lg: 28,
        md: 22,
        base: 18,
        sm: 16,
        xs: 14,
      },
      weight: defaultWeight,
    },
    size: {
      dimension: defaultDimensions,
    },
  },
  color: {
    primary: 'black',
    secondary: 'blue',
    accent: 'pink',
    error: 'red',
    information: 'blue',
    success: 'green',
    warning: 'yellow',
    'neutral-dark': 'slate',
    'neutral-light': 'grey',
  },
  font: {
    family: {
      body: 'content',
      bodyShort: 'content',
      bodyLong: 'content',
      label: 'content',
      labelLong: 'content',
      h1: 'headline',
      h2: 'headline',
      h3: 'headline',
      h4: 'headline',
      h5: 'headline',
      h6: 'headline',
      hyperlink: 'content',
      hyperlinkHover: 'content',
      caption: 'content',
    },
    spacing: {
      hyperlink: 'base',
      hyperlinkHover: 'base',
      body: 'base',
      bodyShort: 'md',
      bodyLong: 'base',
      label: 'md',
      labelLong: 'md',
      h1: 'xs',
      h2: 'xs',
      h3: 'xs',
      h4: 'xs',
      h5: 'xs',
      h6: 'xs',
      caption: 'xs',
    },
    height: {
      hyperlink: 'sm',
      hyperlinkHover: 'sm',
      bodyShort: 'xs',
      body: 'sm',
      bodyLong: 'base',
      label: 'sm',
      labelLong: 'base',
      h1: '4xl',
      h2: '3xl',
      h3: '2xl',
      h4: 'xl',
      h5: 'lg',
      h6: 'md',
      caption: 'xs',
    },
    size: {
      hyperlink: 'base',
      hyperlinkHover: 'base',
      bodyShort: 'xs',
      body: 'sm',
      bodyLong: 'base',
      label: 'base',
      labelLong: 'base',
      h1: '4xl',
      h2: '3xl',
      h3: '2xl',
      h4: 'xl',
      h5: 'lg',
      h6: 'md',
      caption: 'xs',
    },
    weight: {
      hyperlink: 'medium',
      hyperlinkHover: 'medium',
      bodyShort: 'regular',
      body: 'regular',
      bodyLong: 'regular',
      label: 'medium',
      labelLong: 'medium',
      h1: 'bold',
      h2: 'bold',
      h3: 'semiBold',
      h4: 'semiBold',
      h5: 'semiBold',
      h6: 'semiBold',
      caption: 'regular',
    },
    paragraphSpacing: {
      hyperlink: 'base',
      hyperlinkHover: 'base',
      bodyShort: 'base',
      body: 'base',
      bodyLong: 'base',
      label: 'base',
      labelLong: 'base',
      h1: 'base',
      h2: 'base',
      h3: 'base',
      h4: 'base',
      h5: 'base',
      h6: 'base',
      caption: 'base',
    },
  },
  size: {
    border: {
      width: {
        xs: 50,
        sm: 100,
        md: 150,
      },
      radius: {
        none: 0,
        '3xs': 50,
        '2xs': 100,
        xs: 150,
        sm: 200,
        md: 300,
        lg: 400,
        xl: 500,
        '2xl': 600,
        '3xl': 700,
        '4xl': 800,
        pill: 1900,
      },
    },
    spacing: {
      '4xs': 50,
      '3xs': 100,
      '2xs': 200,
      xs: 300,
      sm: 400,
      md: 500,
      lg: 600,
      xl: 800,
      '2xl': 1000,
      '3xl': 1100,
      '4xl': 1300,
    },
  },
  palette: {
    dark: {
      surface: {
        'primary-default': { color: 'primary', scale: 600 },
        'primary-defaultHover': { color: 'primary', scale: 400 },
        'primary-defaultSubtle': { color: 'primary', scale: 1000 },
        'primary-defaultSubtleHover': { color: 'primary', scale: 1100 },
        'primary-defaultSubtleHoverAlt': { color: 'primary', scale: 800 },
        'secondary-default': { color: 'secondary', scale: 500 },
        'secondary-defaultHover': { color: 'secondary', scale: 800 },
        'secondary-defaultSubtle': { color: 'secondary', scale: 1000 },
        'secondary-defaultSubtleHover': { color: 'secondary', scale: 1100 },
        'disabled-default': { color: 'neutral-dark', scale: 600 },
        'error-default': { color: 'error', scale: 700 },
        'error-defaultHover': { color: 'error', scale: 800 },
        'error-defaultSubtle': { color: 'error', scale: 900 },
        'error-defaultSubtleHover': { color: 'error', scale: 1000 },
        'success-default': { color: 'success', scale: 700 },
        'success-defaultHover': { color: 'success', scale: 800 },
        'success-defaultSubtle': { color: 'success', scale: 900 },
        'success-defaultSubtleHover': { color: 'success', scale: 1000 },
        'information-default': { color: 'information', scale: 700 },
        'information-defaultHover': { color: 'information', scale: 800 },
        'information-defaultSubtle': { color: 'information', scale: 900 },
        'information-defaultSubtleHover': { color: 'information', scale: 1000 },
        'warning-default': { color: 'warning', scale: 700 },
        'warning-defaultHover': { color: 'warning', scale: 800 },
        'warning-defaultSubtle': { color: 'warning', scale: 900 },
        'warning-defaultSubtleHover': { color: 'warning', scale: 1000 },
        default: { color: 'primary', scale: 1200 },
        page: { color: 'neutral-dark', scale: 1200 },
        pageAlternative: { color: 'neutral-dark', scale: 1100 },
        alternative: { color: 'neutral-dark', scale: 800 },
      },
      text: {
        'primary-onColor': { color: 'foundation.white' },
        'primary-onColorHover': { color: 'foundation.white' },
        'primary-onColorSubtle': { color: 'secondary', scale: 400 },
        'primary-onColorSubtleHover': { color: 'secondary', scale: 500 },
        'primary-default': { color: 'foundation.white' },
        'primary-defaultHover': { color: 'foundation.white' },
        'secondary-onColor': { color: 'foundation.white' },
        'secondary-onColorHover': { color: 'foundation.white' },
        'secondary-onColorSubtle': { color: 'error', scale: 300 },
        'secondary-onColorSubtleHover': { color: 'error', scale: 400 },
        'secondary-default': { color: 'secondary', scale: 100 },
        'secondary-defaultHover': { color: 'secondary', scale: 300 },
        'disabled-default': { color: 'neutral-light', scale: 300 },
        'disabled-onColor': { color: 'neutral-light', scale: 300 },
        'error-onColor': { color: 'error', scale: 400 },
        'error-onColorHover': { color: 'error', scale: 500 },
        'error-onColorSubtle': { color: 'error', scale: 300 },
        'error-onColorSubtleHover': { color: 'error', scale: 400 },
        'error-default': { color: 'error', scale: 300 },
        'error-defaultHover': { color: 'error', scale: 400 },
        'success-onColor': { color: 'success', scale: 400 },
        'success-onColorHover': { color: 'success', scale: 500 },
        'success-onColorSubtle': { color: 'success', scale: 300 },
        'success-onColorSubtleHover': { color: 'success', scale: 400 },
        'success-default': { color: 'success', scale: 300 },
        'success-defaultHover': { color: 'success', scale: 400 },
        'information-onColor': { color: 'information', scale: 400 },
        'information-onColorHover': { color: 'information', scale: 500 },
        'information-onColorSubtle': { color: 'information', scale: 300 },
        'information-onColorSubtleHover': { color: 'information', scale: 400 },
        'information-default': { color: 'information', scale: 300 },
        'information-defaultHover': { color: 'information', scale: 400 },
        'warning-onColor': { color: 'warning', scale: 400 },
        'warning-onColorHover': { color: 'warning', scale: 500 },
        'warning-onColorSubtle': { color: 'warning', scale: 300 },
        'warning-onColorSubtleHover': { color: 'warning', scale: 400 },
        'warning-default': { color: 'warning', scale: 300 },
        'warning-defaultHover': { color: 'warning', scale: 400 },
        'default-body': { color: 'foundation.white' },
        'default-hero': { color: 'foundation.white' },
        'default-heading': { color: 'foundation.white' },
        'default-caption': { color: 'secondary', scale: 400 },
        'default-placeholder': { color: 'secondary', scale: 400 },
        'onColor-hero': { color: 'foundation.white' },
        'onColor-heading': { color: 'foundation.white' },
        'onColor-body': { color: 'foundation.white' },
        'onColor-caption': { color: 'secondary', scale: 400 },
        'onColor-placeholder': { color: 'secondary', scale: 400 },
        'accent-default': { color: 'accent', scale: 400 },
        'accent-defaultHover': { color: 'accent', scale: 500 },
        'accent-onColor': { color: 'accent', scale: 400 },
        'accent-onColorHover': { color: 'accent', scale: 500 },
        'accent-onColorSubtle': { color: 'accent', scale: 300 },
        'accent-onColorSubtleHover': { color: 'accent', scale: 400 },
      },
      icon: {
        'primary-onColor': { color: 'foundation.white' },
        'primary-onColorHover': { color: 'foundation.white' },
        'primary-onColorSubtle': { color: 'secondary', scale: 400 },
        'primary-onColorSubtleHover': { color: 'secondary', scale: 500 },
        'primary-default': { color: 'foundation.white' },
        'primary-defaultHover': { color: 'foundation.white' },
        'primary-defaultSubtle': { color: 'secondary', scale: 400 },
        'primary-defaultSubtleHover': { color: 'secondary', scale: 500 },
        'secondary-onColor': { color: 'accent', scale: 400 },
        'secondary-onColorHover': { color: 'accent', scale: 500 },
        'secondary-onColorSubtle': { color: 'secondary', scale: 300 },
        'secondary-onColorSubtleHover': { color: 'secondary', scale: 400 },
        'secondary-default': { color: 'secondary', scale: 200 },
        'secondary-defaultHover': { color: 'secondary', scale: 300 },
        'disabled-default': { color: 'neutral-light', scale: 300 },
        'disabled-onColor': { color: 'neutral-light', scale: 300 },
        'error-onColor': { color: 'error', scale: 400 },
        'error-onColorHover': { color: 'error', scale: 500 },
        'error-onColorSubtle': { color: 'error', scale: 300 },
        'error-onColorSubtleHover': { color: 'error', scale: 400 },
        'error-default': { color: 'error', scale: 300 },
        'error-defaultHover': { color: 'error', scale: 400 },
        'success-onColor': { color: 'success', scale: 400 },
        'success-onColorHover': { color: 'success', scale: 500 },
        'success-onColorSubtle': { color: 'success', scale: 300 },
        'success-onColorSubtleHover': { color: 'success', scale: 400 },
        'success-default': { color: 'success', scale: 300 },
        'success-defaultHover': { color: 'success', scale: 400 },
        'information-onColor': { color: 'information', scale: 400 },
        'information-onColorHover': { color: 'information', scale: 500 },
        'information-onColorSubtle': { color: 'information', scale: 300 },
        'information-onColorSubtleHover': { color: 'information', scale: 400 },
        'information-default': { color: 'information', scale: 300 },
        'information-defaultHover': { color: 'information', scale: 400 },
        'warning-onColor': { color: 'warning', scale: 400 },
        'warning-onColorHover': { color: 'warning', scale: 500 },
        'warning-onColorSubtle': { color: 'warning', scale: 300 },
        'warning-onColorSubtleHover': { color: 'warning', scale: 400 },
        'warning-default': { color: 'warning', scale: 300 },
        'warning-defaultHover': { color: 'warning', scale: 400 },
      },
      border: {
        'primary-default': { color: 'primary', scale: 900 },
        'primary-defaultHover': { color: 'primary', scale: 800 },
        'primary-defaultSubtle': { color: 'primary', scale: 700 },
        'primary-defaultSubtleHover': { color: 'primary', scale: 600 },
        'primary-focus': { color: 'primary', scale: 900 },
        'error-default': { color: 'error', scale: 900 },
        'error-defaultHover': { color: 'error', scale: 800 },
        'error-defaultSubtle': { color: 'error', scale: 700 },
        'error-defaultSubtleHover': { color: 'error', scale: 600 },
        'error-focus': { color: 'error', scale: 900 },
        'success-default': { color: 'success', scale: 900 },
        'success-defaultHover': { color: 'success', scale: 800 },
        'success-defaultSubtle': { color: 'success', scale: 700 },
        'success-defaultSubtleHover': { color: 'success', scale: 600 },
        'success-focus': { color: 'success', scale: 900 },
        'information-default': { color: 'information', scale: 900 },
        'information-defaultHover': { color: 'information', scale: 800 },
        'information-defaultSubtle': { color: 'information', scale: 700 },
        'information-defaultSubtleHover': { color: 'information', scale: 600 },
        'information-focus': { color: 'information', scale: 900 },
        'warning-default': { color: 'warning', scale: 900 },
        'warning-defaultHover': { color: 'warning', scale: 800 },
        'warning-defaultSubtle': { color: 'warning', scale: 700 },
        'warning-defaultSubtleHover': { color: 'warning', scale: 600 },
        'warning-focus': { color: 'warning', scale: 900 },
        'secondary-default': { color: 'secondary', scale: 900 },
        'secondary-defaultHover': { color: 'secondary', scale: 800 },
        'secondary-defaultSubtle': { color: 'secondary', scale: 700 },
        'secondary-defaultSubtleHover': { color: 'secondary', scale: 600 },
        'secondary-focus': { color: 'secondary', scale: 900 },
        disabled: { color: 'neutral-light', scale: 1000 },
        'disabled-onColor': { color: 'neutral-light', scale: 200 },
        default: { color: 'neutral-light', scale: 800 },
        'default-onColor': { color: 'neutral-light', scale: 800 },
      },
    },
    light: {
      surface: {
        'primary-default': { color: 'primary', scale: 1000 },
        'primary-defaultHover': { color: 'primary', scale: 600 },
        'primary-defaultSubtle': { color: 'primary', scale: 100 },
        'primary-defaultSubtleHover': { color: 'primary', scale: 200 },
        'primary-defaultSubtleHoverAlt': { color: 'primary', scale: 200 },
        'secondary-default': { color: 'secondary', scale: 600 },
        'secondary-defaultHover': { color: 'secondary', scale: 500 },
        'secondary-defaultSubtle': { color: 'secondary', scale: 100 },
        'secondary-defaultSubtleHover': { color: 'secondary', scale: 200 },
        'disabled-default': { color: 'neutral-dark', scale: 500 },
        'error-default': { color: 'error', scale: 200 },
        'error-defaultHover': { color: 'error', scale: 300 },
        'error-defaultSubtle': { color: 'error', scale: 100 },
        'error-defaultSubtleHover': { color: 'error', scale: 150 },
        'success-default': { color: 'success', scale: 200 },
        'success-defaultHover': { color: 'success', scale: 300 },
        'success-defaultSubtle': { color: 'success', scale: 100 },
        'success-defaultSubtleHover': { color: 'success', scale: 150 },
        'information-default': { color: 'information', scale: 200 },
        'information-defaultHover': { color: 'information', scale: 300 },
        'information-defaultSubtle': { color: 'information', scale: 100 },
        'information-defaultSubtleHover': { color: 'information', scale: 150 },
        'warning-default': { color: 'warning', scale: 200 },
        'warning-defaultHover': { color: 'warning', scale: 300 },
        'warning-defaultSubtle': { color: 'warning', scale: 100 },
        'warning-defaultSubtleHover': { color: 'warning', scale: 150 },
        default: { color: 'foundation.white' },
        page: { color: 'foundation.white' },
        pageAlternative: { color: 'neutral-light', scale: 1100 },
        alternative: { color: 'neutral-light', scale: 100 },
      },
      text: {
        'primary-onColor': { color: 'foundation.white' },
        'primary-onColorHover': { color: 'foundation.white' },
        'primary-onColorSubtle': { color: 'primary', scale: 900 },
        'primary-onColorSubtleHover': { color: 'primary', scale: 1000 },
        'primary-default': { color: 'primary', scale: 800 },
        'primary-defaultHover': { color: 'foundation.white', scale: 900 },
        'secondary-onColor': { color: 'foundation.white' },
        'secondary-onColorHover': { color: 'foundation.white' },
        'secondary-onColorSubtle': { color: 'secondary', scale: 900 },
        'secondary-onColorSubtleHover': { color: 'secondary', scale: 1000 },
        'secondary-default': { color: 'secondary', scale: 500 },
        'secondary-defaultHover': { color: 'secondary', scale: 900 },
        'disabled-default': { color: 'neutral-light', scale: 600 },
        'disabled-onColor': { color: 'foundation.white' },
        'error-onColor': { color: 'neutral-light', scale: 100 },
        'error-onColorHover': { color: 'neutral-light', scale: 200 },
        'error-onColorSubtle': { color: 'error', scale: 700 },
        'error-onColorSubtleHover': { color: 'error', scale: 800 },
        'error-default': { color: 'error', scale: 800 },
        'error-defaultHover': { color: 'error', scale: 900 },
        'success-onColor': { color: 'neutral-light', scale: 100 },
        'success-onColorHover': { color: 'neutral-light', scale: 200 },
        'success-onColorSubtle': { color: 'success', scale: 800 },
        'success-onColorSubtleHover': { color: 'success', scale: 900 },
        'success-default': { color: 'success', scale: 800 },
        'success-defaultHover': { color: 'success', scale: 900 },
        'information-onColor': { color: 'neutral-light', scale: 100 },
        'information-onColorHover': { color: 'neutral-light', scale: 200 },
        'information-onColorSubtle': { color: 'information', scale: 800 },
        'information-onColorSubtleHover': { color: 'information', scale: 900 },
        'information-default': { color: 'information', scale: 800 },
        'information-defaultHover': { color: 'information', scale: 900 },
        'warning-onColor': { color: 'neutral-light', scale: 100 },
        'warning-onColorHover': { color: 'neutral-light', scale: 200 },
        'warning-onColorSubtle': { color: 'warning', scale: 800 },
        'warning-onColorSubtleHover': { color: 'warning', scale: 900 },
        'warning-default': { color: 'warning', scale: 800 },
        'warning-defaultHover': { color: 'warning', scale: 900 },
        'default-body': { color: 'neutral-light', scale: 900 },
        'default-hero': { color: 'neutral-light', scale: 1100 },
        'default-heading': { color: 'neutral-light', scale: 1100 },
        'default-caption': { color: 'neutral-light', scale: 700 },
        'default-placeholder': { color: 'neutral-light', scale: 700 },
        'onColor-hero': { color: 'neutral-light', scale: 100 },
        'onColor-heading': { color: 'neutral-light', scale: 100 },
        'onColor-body': { color: 'neutral-light', scale: 100 },
        'onColor-caption': { color: 'neutral-light', scale: 200 },
        'onColor-placeholder': { color: 'neutral-light', scale: 300 },
        'accent-onColor': { color: 'neutral-light', scale: 100 },
        'accent-onColorHover': { color: 'neutral-light', scale: 200 },
        'accent-onColorSubtle': { color: 'accent', scale: 800 },
        'accent-onColorSubtleHover': { color: 'accent', scale: 900 },
        'accent-default': { color: 'accent', scale: 800 },
        'accent-defaultHover': { color: 'accent', scale: 900 },
      },
      icon: {
        'primary-onColor': { color: 'primary', scale: 100 },
        'primary-onColorHover': { color: 'primary', scale: 200 },
        'primary-onColorSubtle': { color: 'primary', scale: 900 },
        'primary-onColorSubtleHover': { color: 'primary', scale: 1000 },
        'primary-default': { color: 'primary', scale: 800 },
        'primary-defaultHover': { color: 'primary', scale: 900 },
        'primary-defaultSubtle': { color: 'primary', scale: 500 },
        'primary-defaultSubtleHover': { color: 'primary', scale: 600 },
        'secondary-onColor': { color: 'secondary', scale: 800 },
        'secondary-onColorHover': { color: 'secondary', scale: 900 },
        'secondary-onColorSubtle': { color: 'secondary', scale: 800 },
        'secondary-onColorSubtleHover': { color: 'secondary', scale: 900 },
        'secondary-default': { color: 'secondary', scale: 800 },
        'secondary-defaultHover': { color: 'secondary', scale: 900 },
        'disabled-default': { color: 'neutral-light', scale: 600 },
        'disabled-onColor': { color: 'neutral-light', scale: 600 },
        'error-onColor': { color: 'neutral-light', scale: 100 },
        'error-onColorHover': { color: 'neutral-light', scale: 200 },
        'error-onColorSubtle': { color: 'error', scale: 700 },
        'error-onColorSubtleHover': { color: 'error', scale: 800 },
        'error-default': { color: 'error', scale: 800 },
        'error-defaultHover': { color: 'error', scale: 900 },
        'success-onColor': { color: 'neutral-light', scale: 100 },
        'success-onColorHover': { color: 'neutral-light', scale: 200 },
        'success-onColorSubtle': { color: 'success', scale: 800 },
        'success-onColorSubtleHover': { color: 'success', scale: 900 },
        'success-default': { color: 'success', scale: 800 },
        'success-defaultHover': { color: 'success', scale: 900 },
        'information-onColor': { color: 'neutral-light', scale: 100 },
        'information-onColorHover': { color: 'neutral-light', scale: 200 },
        'information-onColorSubtle': { color: 'information', scale: 800 },
        'information-onColorSubtleHover': { color: 'information', scale: 900 },
        'information-default': { color: 'information', scale: 800 },
        'information-defaultHover': { color: 'information', scale: 900 },
        'warning-onColor': { color: 'neutral-light', scale: 100 },
        'warning-onColorHover': { color: 'neutral-light', scale: 200 },
        'warning-onColorSubtle': { color: 'warning', scale: 800 },
        'warning-onColorSubtleHover': { color: 'warning', scale: 900 },
        'warning-default': { color: 'warning', scale: 800 },
        'warning-defaultHover': { color: 'warning', scale: 900 },
      },
      border: {
        'primary-default': { color: 'primary', scale: 800 },
        'primary-defaultHover': { color: 'primary', scale: 900 },
        'primary-defaultSubtle': { color: 'primary', scale: 300 },
        'primary-defaultSubtleHover': { color: 'primary', scale: 500 },
        'primary-focus': { color: 'primary', scale: 900 },
        'error-default': { color: 'error', scale: 800 },
        'error-defaultHover': { color: 'error', scale: 900 },
        'error-defaultSubtle': { color: 'error', scale: 150 },
        'error-defaultSubtleHover': { color: 'error', scale: 300 },
        'error-focus': { color: 'error', scale: 800 },
        'success-default': { color: 'success', scale: 800 },
        'success-defaultHover': { color: 'success', scale: 900 },
        'success-defaultSubtle': { color: 'success', scale: 150 },
        'success-defaultSubtleHover': { color: 'success', scale: 300 },
        'success-focus': { color: 'success', scale: 800 },
        'warning-default': { color: 'warning', scale: 800 },
        'warning-defaultHover': { color: 'warning', scale: 900 },
        'warning-defaultSubtle': { color: 'warning', scale: 150 },
        'warning-defaultSubtleHover': { color: 'warning', scale: 300 },
        'warning-focus': { color: 'warning', scale: 800 },
        'information-default': { color: 'information', scale: 800 },
        'information-defaultHover': { color: 'information', scale: 900 },
        'information-defaultSubtle': { color: 'information', scale: 150 },
        'information-defaultSubtleHover': { color: 'information', scale: 300 },
        'information-focus': { color: 'information', scale: 800 },
        'secondary-default': { color: 'secondary', scale: 800 },
        'secondary-defaultHover': { color: 'secondary', scale: 900 },
        'secondary-defaultSubtle': { color: 'secondary', scale: 300 },
        'secondary-defaultSubtleHover': { color: 'secondary', scale: 500 },
        'secondary-focus': { color: 'secondary', scale: 900 },
        disabled: { color: 'neutral-light', scale: 200 },
        'disabled-onColor': { color: 'neutral-light', scale: 900 },
        default: { color: 'neutral-light', scale: 300 },
        'default-onColor': { color: 'foundation.white' },
      },
    },
  },
}
