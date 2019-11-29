exports.config = {
  output: './test/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8203',
      show: false
    }
  },
  include: {
    I: './test/step_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./test/step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  tests: './test/*_test.js',
  name: 'a-front-end-service'
};
