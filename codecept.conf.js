exports.config = {
  output: './test/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8203',
      show: true
    }
  },
  include: {
    I: './test/feature/step_file.js',
    adminPage: './test/feature/pages/admin.js',
    homePage: './test/feature/pages/home.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './test/feature/step_definitions/steps.js',
      './test/feature/step_definitions/admin.steps.js',
      './test/feature/step_definitions/home.steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: false
    }
  },
  tests: './test/*_test.js',
  name: 'a-front-end-service'
};
