import { defineConfig } from 'cypress'

require('dotenv').config()

export default defineConfig({
  defaultCommandTimeout: 15000,
  requestTimeout: 30000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  video: false,
  env: {
    ...process.env,
  },
  e2e: {
    baseUrl: 'http://eshop.zasilkovna.cz',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/_edit/**'],
    experimentalRunAllSpecs: true,
  },
})
