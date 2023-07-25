describe('as a ORGANIZATION_ADMIN', () => {
  const ADMIN_CREDS = {
    role: 'ORGANIZATION_ADMIN',
    username: 'org.admin@codibly.com',
    password: 'Test123#',
  };

  beforeEach(() => {
    cy.setBackofficeToken(ADMIN_CREDS.username, ADMIN_CREDS.password);
  });

  it(`should have role name equals to: ${ADMIN_CREDS.role}`, () => {
    cy.getUserInfo()
      .then((response) => {
        if (response.isOkStatusCode) {
          return response.body.sub;
        }
      })
      .then((user_id) => {
        cy.getUserDetails(String(user_id)).then((response) => {
          expect(response.body.role).to.equal(`ROLE_${ADMIN_CREDS.role}`);
        });
      });
  });
});
