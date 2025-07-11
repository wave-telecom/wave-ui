import type { Preview } from '@storybook/react-vite'
import { themes } from 'storybook/theming'

import ThemeDecorator from './decorators/theme-decorator'

const preview: Preview = {
  decorators: [ThemeDecorator(undefined)],
  parameters: {
    options: {
      storySort: {
        order: ['stories', ['ui']],
      },
    },
    controls: {},
    docs: {
      theme: themes.dark,
    },
    backgrounds: {},
  },
  initialGlobals: {
    theme: 'wave',
    mode: 'light',
  },
  globalTypes: {
    mode: {
      name: 'Color Mode',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'moon',
        items: [
          { value: 'dark', title: 'Dark' },
          { value: 'light', title: 'Light' },
        ],
        showName: true,
      },
    },
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'wave',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'wave', title: 'Wave' },
          { value: 'telcel', title: 'Telcel' },
          { value: 'nio', title: 'Nio' },
          { value: 'algar', title: 'Algar' },
        ],
        showName: true,
      },
    },
  },
}

export default preview
