import 'cypress-each';
import 'cypress-plugin-steps';
import { USERS_CREDENTIALS } from '../../../test-data/credentials';
import { ApiUsers } from '../../support/api/api-users';
import * as spok from 'cy-spok';

const usersCredentials = USERS_CREDENTIALS;

describe('Users roles', () => {
  let apiUsers: ApiUsers;

  context.each(usersCredentials)(
    (user) => `as a ${user.role} user`,
    (user) => {
      const roleName = user.role;

      beforeEach(() => {
        apiUsers = new ApiUsers(user.username, user.password);
      });

      it(`should have role name equals to: ${roleName}`, () => {
        cy.section('Sekcja');
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

            cy.step('By cy-spok: Validate if user is assigned to proper role');
            apiUsers
              .getUserDetailsById(String(user_id))
              .its('body')
              .then(
                spok({
                  role: `ROLE_${roleName}`,
                  email: spok.string,
                }),
              );
          });
      });
    },
  );
});
