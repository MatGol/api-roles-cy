import ApiCommands from './api-commands';
import { attachDetailsToUrl, attachIdToUrl } from './utils';

export class ApiRequests extends ApiCommands {
  getAllRecords(path: string) {
    return super.getRequest(path);
  }

  getDetails(path: string, variableName) {
    super.getRequest(attachDetailsToUrl(path, variableName));
  }

  getDetailsById(path: string, id: string, variableName: string) {
    const detailsPath = attachIdToUrl(path, variableName, id);

    return super.getRequest(detailsPath);
  }

  createNewRecord(path: string, body: object) {
    return super.postRequest(path, body);
  }

  editRecord(path: string, body: object) {
    return super.putRequest(path, body);
  }

  deleteRecord(path) {
    return super.deleteRequest(path);
  }

  getRecordsByQueries(path, queries) {
    return super.getRequest(path, queries);
  }
}
