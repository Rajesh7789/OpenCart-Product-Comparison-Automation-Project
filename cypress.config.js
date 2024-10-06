const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  // implement node event listeners here
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern : "cypress/Integration/end_to_end.js"
  },

  reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
    
});
