# Assurity API Test – Playwright + JavaScript

Technical assignment using Playwright with JavaScript to automate the validation of specific data from a public API.

## Objective

The test validates the following API endpoint:

https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

## What the test checks

- The `Name` field should equal "Carbon credits"
- The `CanRelist` field should be `true`
- Under the `Promotions` array, the item with `Name = "Gallery"` should have a `Description` that includes "Good position in category"

## Stack used

- JavaScript (ES modules)
- Playwright test runner
- Axios for making the API call

## Project structure

- `tests/apitest.spec.js` –  the main test logic
- `playwright.config.js` –  test config and directory structure
- `package.json` – dependencies

## for running this test

we need Node.js is installed on our system. Then run:

npm install
npx playwright test

The test will confirm whether the API returns along with expected values.

