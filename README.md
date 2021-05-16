This repo contains tests for Trademe sandbox application.
Tests can be executed via different helpers, but I have configured to work only with WebdriverIO helper tool. Using Webdriver it helps testing all crossbrowser platforms.

# Setup repo

```
 git clone repo
 cd repo

 npm install
 npm run test

```

# report generation

When the tests are done you can generate allure report from the results

```
    npm run report
```

This will open allure report server in browser and gives you information on test reports.

## Headless Mode

Run tests in headless mode:
Under .env files change #HEADLESS to HEADLESS then execute tests in headless mode

```
npm run test
```

Otherway to run headless mode is to run below command which has headless prefix. See package.json file scripts for more information.

```
npm run headless:chrome
```

## Parallel Execution

Run tests in parallel with 3 workers:

```
npx codeceptjs run-workers 3
```
