exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.ze.delivery/',
      browser: 'chrome'
    },
    MyCustomHelper: {
      require: './MyCustomHelper.js',
    },
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js',
    address_page: './pages/address_page.js',
    checkout_page: './pages/checkout_page.js',
    common_page: './pages/common_page.js',
    product_page: './pages/product_page.js',
  },
  mocha: {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/login_steps.js',
      './step_definitions/order_steps.js'
    ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
  },
  name: 'ze-delivery-web'
}