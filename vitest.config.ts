import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    environment: 'jsdom',
    watch: false,
    coverage: {
      provider: 'istanbul',
      include: ['src/**/*.{tsx,ts}'],
      exclude: ['**/*.stories.{tsx,ts}'],
    },
  },
})
