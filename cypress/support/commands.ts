import 'cypress-localstorage-commands';
import { apiPaths } from '../../test-data/api-paths';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('setBackofficeToken', (user, password) => {
  cy.request({
    url: apiPaths.token,
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: {
      client_id: 'backoffice-client',
      grant_type: 'password',
      username: user,
      password: password,
    },
  }).then((response) => {
    cy.setLocalStorage('token', response.body.access_token);
    cy.saveLocalStorage();
  });
});

Cypress.Commands.add('getUserInfo', () => {
  return cy.request({
    method: 'GET',
    url: apiPaths.userInfo,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('getUserDetails', (user_id) => {
  return cy.request({
    method: 'GET',
    url: `${Cypress.env('CORE_API')}/api/core/protected/v1/user_management/users/${user_id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    failOnStatusCode: false,
  });
});
