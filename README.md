## Sample API tests in Cypress

### Setup

Run `npm ci` to install all dependencies.

### Reporting

Test reports are created automatically when tests are run in the headless mode. The test report containing screenshots
for failed tests is saved `cypress/reports`

### Linting and keeping code style

There is a combination of Prettier and ESLint tools to keep code clean and format it properly. Also rules for Cypress
was added to keep and ensure that the basic principles of test code development are maintained.
