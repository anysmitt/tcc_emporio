const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://www.emporiodacerveja.com.br/',
    defaultCommandTimeout: 10000
  },
});
