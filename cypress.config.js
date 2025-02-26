const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    LOGIN_VERIFIED_USER: 'standard_user',
    LOGIN_UNVERIFIED_USER: 'non_existant_user',
    LOGIN_PASSWORD: 'secret_sauce',
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    testIsolation: false,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
  },
  defaultCommandTimeout: 7000
})
