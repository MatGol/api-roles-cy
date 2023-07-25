// eslint-disable-next-line @typescript-eslint/no-var-requires
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 1400,
  viewportHeight: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
    reporterOptions: {
      reportDir: 'cypress/reports',
      reportPageTitle: 'Sample API tests',
      timestamp: 'longDate',
      reportFilename: '[status]_[datetime]-sample-api-tests-report',
      charts: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      quiet: true,
      ignoreVideos: true,
    },
    env: {
      TOKEN_API: 'https://sso.test.efleet-aggregator.com',
      CORE_API: 'https://api.test.efleet-aggregator.com',
      PROJECT: 'test',
    },
    specPattern: 'cypress/specs/**/*.ts',
  },
});
