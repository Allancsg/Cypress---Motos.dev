const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  failOnNonZeroExit: false,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  viewportWidth: 1366,
  viewportHeight: 720,
  pageLoadTimeout: 30000,
  video: false,
  retries: 2,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    
  },
})
