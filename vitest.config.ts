/// <reference types="vitest/config" />

import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react()],
  test: {
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'jsdom',
    watch: false,
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{tsx,ts}'],
      exclude: ['**/*.stories.{tsx,ts}'],
    },
    projects: [
      {
        extends: true,
        test: {
          include: ['**/*.{spec,test}.{tsx,ts}'],
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
          },
        },
      },
      {
        extends: true,
        plugins: [
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                name: 'storybook-chromium',
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
