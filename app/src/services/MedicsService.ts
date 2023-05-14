import {MedicProps} from '@types/index';
import HttpClient from './utils/HttpClient';

class MedicsService {
  private httpClient = new HttpClient(
    'https://api-production-160a.up.railway.app',
  );

  async listAll() {
    return this.httpClient.get<MedicProps[]>('/doctors');
  }
}

export default new MedicsService();
