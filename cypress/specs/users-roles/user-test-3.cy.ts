import { apiPaths } from '../../../test-data/api-paths';

describe('as a ORGANIZATION_ADMIN', () => {
  const ADMIN_CREDS = {
    role: 'ORGANIZATION_ADMIN',
    username: 'org.admin@codibly.com',
    password: 'Test123#',
  };

  beforeEach(() => {
    cy.request({
      url: apiPaths.token,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        client_id: 'backoffice-client',
        grant_type: 'password',
        username: ADMIN_CREDS.username,
        password: ADMIN_CREDS.password,
      },
    }).then((response) => {
      cy.setLocalStorage('token', response.body.access_token);
      cy.saveLocalStorage();
    });
  });

  it(`should have role name equals to: ${ADMIN_CREDS.role}`, () => {
    cy.request({
      method: 'GET',
      url: apiPaths.userInfo,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      failOnStatusCode: false,
    })
      .then((response) => {
        if (response.isOkStatusCode) {
          return response.body.sub;
        }
      })
      .then((user_id) => {
        cy.request({
          method: 'GET',
          url: `${Cypress.env('CORE_API')}/api/core/protected/v1/user_management/users/${user_id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.body.role).to.equal(`ROLE_${ADMIN_CREDS.role}`);
        });
      });
  });
});
