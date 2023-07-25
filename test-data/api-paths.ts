export const apiPaths = {
  token: `${Cypress.env('TOKEN_API')}/auth/realms/test/protocol/openid-connect/token`,
  userInfo: `${Cypress.env('TOKEN_API')}/auth/realms/test/protocol/openid-connect/userinfo`,
  users: `${Cypress.env('CORE_API')}/api/core/protected/v1/user_management/users`,
  userDetails: `${Cypress.env('CORE_API')}/api/core/protected/v1/user_management/users/%user-id`,
};
