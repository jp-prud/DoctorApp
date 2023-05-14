import {CategoryProps} from '@types/index';
import HttpClient from './utils/HttpClient';

class SpecialitiesService {
  private httpClient = new HttpClient(
    'https://api-production-160a.up.railway.app',
  );

  public findAll() {
    return this.httpClient.get<CategoryProps[]>('/specialities');
  }
}

export default new SpecialitiesService();
