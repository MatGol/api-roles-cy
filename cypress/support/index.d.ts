declare namespace Cypress {
  interface Chainable {
    setBackofficeToken(email: string, password: string): Chainable;

    getUserInfo(): Chainable;

    getUserDetails(user_id: string): Chainable;
  }
}
