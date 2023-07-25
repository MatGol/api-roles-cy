import 'cypress-plugin-steps';
import { USERS_CREDENTIALS } from '../../../test-data/credentials';
import { ApiUsers } from '../../support/api/api-users';

describe('Users roles', () => {
  let apiUsers: ApiUsers;

  it('should ', () => {
    cy.log(USERS_CREDENTIALS[0][1].role);
  });

  context(`as a ${USERS_CREDENTIALS[0][1].role}`, () => {
    const user = USERS_CREDENTIALS[0][1];
    const roleName = user.role;

    beforeEach(() => {
      apiUsers = new ApiUsers(user.username, user.password);
    });

    it(`should have role name equals to: ${roleName}`, () => {
      cy.step('Get info about logged in user');

      apiUsers
        .getUserInfo()
        .then((response) => {
          if (response.isOkStatusCode) {
            return response.body.sub;
          }
        })
        .then((user_id) => {
          cy.step('Validate if user is assigned to proper role');
          apiUsers.getUserDetailsById(String(user_id)).then((response) => {
            expect(response.body.role).to.equal(`ROLE_${roleName}`);
          });
        });
    });
  });
  context(`as a ${USERS_CREDENTIALS[1][1].role}`, () => {
    const user = USERS_CREDENTIALS[1][1];
    const roleName = user.role;

    beforeEach(() => {
      apiUsers = new ApiUsers(user.username, user.password);
    });

    it(`should have role name equals to: ${roleName}`, () => {
      cy.step('Get info about logged in user');

      apiUsers
        .getUserInfo()
        .then((response) => {
          if (response.isOkStatusCode) {
            return response.body.sub;
          }
        })
        .then((user_id) => {
          cy.step('Validate if user is assigned to proper role');
          apiUsers.getUserDetailsById(String(user_id)).then((response) => {
            expect(response.body.role).to.equal(`ROLE_${roleName}`);
          });
        });
    });
  });
  context(`as a ${USERS_CREDENTIALS[2][1].role}`, () => {
    const user = USERS_CREDENTIALS[2][1];
    const roleName = user.role;

    beforeEach(() => {
      apiUsers = new ApiUsers(user.username, user.password);
    });

    it(`should have role name equals to: ${roleName}`, () => {
      cy.step('Get info about logged in user');

      apiUsers
        .getUserInfo()
        .then((response) => {
          if (response.isOkStatusCode) {
            return response.body.sub;
          }
        })
        .then((user_id) => {
          cy.step('Validate if user is assigned to proper role');
          apiUsers.getUserDetailsById(String(user_id)).then((response) => {
            expect(response.body.role).to.equal(`ROLE_${roleName}`);
          });
        });
    });
  });
  context(`as a ${USERS_CREDENTIALS[3][1].role}`, () => {
    const user = USERS_CREDENTIALS[3][1];
    const roleName = user.role;

    beforeEach(() => {
      apiUsers = new ApiUsers(user.username, user.password);
    });

    it(`should have role name equals to: ${roleName}`, () => {
      cy.step('Get info about logged in user');

      apiUsers
        .getUserInfo()
        .then((response) => {
          if (response.isOkStatusCode) {
            return response.body.sub;
          }
        })
        .then((user_id) => {
          cy.step('Validate if user is assigned to proper role');
          apiUsers.getUserDetailsById(String(user_id)).then((response) => {
            expect(response.body.role).to.equal(`ROLE_${roleName}`);
          });
        });
    });
  });
  context(`as a ${USERS_CREDENTIALS[4][1].role}`, () => {
    const user = USERS_CREDENTIALS[4][1];
    const roleName = user.role;

    beforeEach(() => {
      apiUsers = new ApiUsers(user.username, user.password);
    });

    it(`should have role name equals to: ${roleName}`, () => {
      cy.step('Get info about logged in user');

      apiUsers
        .getUserInfo()
        .then((response) => {
          if (response.isOkStatusCode) {
            return response.body.sub;
          }
        })
        .then((user_id) => {
          cy.step('Validate if user is assigned to proper role');
          apiUsers.getUserDetailsById(String(user_id)).then((response) => {
            expect(response.body.role).to.equal(`ROLE_${roleName}`);
          });
        });
    });
  });
});
