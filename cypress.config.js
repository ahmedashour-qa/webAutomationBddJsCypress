const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { Formatter } = require('cucumber-json-report-formatter');

const {
  addCucumberPreprocessorPlugin,
  afterRunHandler,
} = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const fs = require('fs');

const setupNodeEvents = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config, {
    omitAfterRunHandler: true,
  });

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    }),
  );

  on('after:run', async (results) => {
    if (results) {
      const formatter = new Formatter();
      const sourceFile = './cypress/reports/messages/cucumber-messages.ndjson';
      const outputFile = './cypress/json/cypress-cucumber-report.json';
      await formatter.parseCucumberJson(sourceFile, outputFile);
      fs.writeFileSync(
        'cypress/results/results.json',
        JSON.stringify(
          {
            browserName: results.browserName,
            browserVersion: results.browserVersion,
            osName: results.osName,
            osVersion: results.osVersion,
            nodeVersion: results.config.resolvedNodeVersion,
            cypressVersion: results.cypressVersion,
            startedTestsAt: results.startedTestsAt,
            endedTestsAt: results.endedTestsAt,
          },
          null,
          '\t',
        ),
      );
    }
  });
  return config;
};
module.exports = defineConfig({
  env: {
    lang: 'en',
    KSA: 'sa',
  },
  e2e: {
    baseUrl: 'https://subscribe.stctv.com/',
    specPattern: '**/*.feature',
    setupNodeEvents,
    blockHosts: [
      '*.googletagmanager.com',
      '*.stctv.zendesk.com',
      '*.kameleoon.eu',
      '*.kochava.com',
      '*.licensing.bitmovin.com',
    ],
  },
});
