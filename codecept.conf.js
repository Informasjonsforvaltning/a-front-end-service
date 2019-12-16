exports.config = {
  output: './test/generated/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8203',
      show: false
    }
  },
  include: {
    I: './test/feature/js/step_file.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './test/feature/js/step_definitions/steps.js',
      './test/feature/js/step_definitions/admin.steps.js',
      './test/generated/feature/home.steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  require: ['ts-node/register'],
  tests: './test/feature/*_test.js',
  name: 'a-front-end-service'
};
