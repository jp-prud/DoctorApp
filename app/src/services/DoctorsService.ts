import {DoctorProps} from '@types/index';
import HttpClient from './utils/HttpClient';

class DoctorsService {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(
      'https://api-production-160a.up.railway.app',
    );
  }

  async listAll() {
    return await this.httpClient.get<DoctorProps[]>('/doctors');
  }
}

export default new DoctorsService();
