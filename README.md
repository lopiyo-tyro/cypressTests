# cypressTests

## Cypress Installation - if applicable

1. Install Cypress using any of the methods described here - https://docs.cypress.io/guides/getting-started/installing-cypress.html 
2. Check your install is successfull (I installed on a macOS Mojave 10.14.6. See below versions of Cypress installed) using the command below or similar 
```
$ $(npm bin)/cypress --version
Cypress package version: 6.4.0
Cypress binary version: 6.4.0
Electron version: 11.2.1
Bundled Node version: 12.18.3
```

## How to run tests with browser of choice
1. Copy integration/e2eScenario.js into the folder where you run your Cypress tests. (I used the default integration  sub folder available after my installation in step 1
2. On a terminal, open Cypress from your project root to start the Cypress Test runner - Different ways to do this can be found at https://docs.cypress.io/guides/getting-started/installing-cypress.html#Opening-Cypress. On a mac termina I did the following:
```
 $ $(npm bin)/cypress open
 ```
 3. Cypress Test runner gives a choice of browser - I used Chrome  version 88.0.4324.96 and Firefox version 85.0 
 4. Select browser of choice on Cypress Test Runner and click on file e2eScenario.js to run tests.
 5. If you reached this step, you are hopefully basking in the glory of passing tests!!
