const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://marketplace-alpha.tendaatacado.com.br',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
