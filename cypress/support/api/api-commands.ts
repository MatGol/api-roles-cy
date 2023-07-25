import { apiPaths } from '../../../test-data/api-paths';

export default class ApiCommands {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  private request(method, url, body?, queries?) {
    return this.setAccessToken().then((response) => {
      cy.api({
        method,
        url,
        headers: { Authorization: `Bearer ${response.body.access_token}` },
        body,
        qs: queries,
        failOnStatusCode: false,
      });
    });
  }

  private setAccessToken() {
    return cy.request({
      url: apiPaths.token,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        client_id: 'backoffice-client',
        grant_type: 'password',
        username: this.username,
        password: this.password,
      },
    });
  }

  //TODO przeciazenie metod?
  getRequest(url, queries?) {
    return this.request('GET', url, queries);
  }

  postRequest(url, body) {
    return this.request('POST', url, body);
  }

  putRequest(url, body) {
    return this.request('PUT', url, body);
  }

  patchRequest(url, body) {
    return this.request('PATCH', url, body);
  }

  deleteRequest(url) {
    return this.request('DELETE', url);
  }
}
