import { ApiRequests } from './api-requests';
import { apiPaths } from '../../../test-data/api-paths';

export class ApiUsers extends ApiRequests {
  getUserInfo() {
    return super.getRequest(apiPaths.userInfo);
  }

  getUsers() {
    return super.getAllRecords(apiPaths.users);
  }

  getUserDetailsById(id: string) {
    return super.getDetailsById(apiPaths.userDetails, id, 'user-id');
  }
}
