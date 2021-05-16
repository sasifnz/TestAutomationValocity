require("dotenv").config();

const { setHeadlessWhen } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

const BROWSER = process.profile || "chrome";

exports.config = {
  output: "./output",
  helpers: {
    WebDriver: {
      browser: BROWSER,
      url: "https://www.tmsandbox.co.nz/",
      smartWait: 5000,
      waitForTimeout: 20000,
      timeouts: {
        implicit: 5000,
        script: 60000,
        "page load": 10000,
      },
    },
    REST: {
      endpoint: "https://secure.tmsandbox.co.nz",
      onRequest: () => {
        //request.headers.auth = "123";
      },
    },
    CustomHelper: {
      require: "./e2es/helpers/custom.helper.js",
    },
  },
  gherkin: {
    features: "./e2es/features/*.feature",
    steps: [
      "./e2es/steps/trademe.steps.js",
      "./e2es/steps/trademeSearch.steps.js",
      "./e2es/steps/trademeWatchList.steps.js",
    ],
  },
  include: {
    trademePages: "./e2es/pages/trademe.pages.js",
    trademeSearchItemPages: "./e2es/pages/trademeSearchItem.pages.js",
    trademeWatchlListPages: "./e2es/pages/trademeWatchList.pages.js",
  },
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
    allure: {
      enabled: true,
    },
    autoDelay: {
      enabled: true,
      delayBefore: 400,
    },
    retryFailedStep: {
      enabled: true,
      retries: 5,
    },
    tryTo: {
      enabled: true,
    },
    wdio: {
      enabled: true,
      services: ["selenium-standalone"],
    },
  },

  bootstrap: null,
  mocha: {},
  name: "codecept demo tests",
};
