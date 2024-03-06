const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "z3eg5p",
  defaultCommandTimeout: 80000,
  responseTimeout: 60000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout:120000,
  retries: {
    runMode: 3,
    openMode: 0,
  },
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://api-staging.co',
    excludeSpecPattern: ['*.hot-update.js', '*.method.js'],
    experimentalSessionAndOrigin: true
  },
})
