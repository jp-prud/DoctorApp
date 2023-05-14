import {HttpResponseConfig} from '@services/utils/HttpClient';

interface APIErrorProps<T> {
  response: HttpResponseConfig<T>;
  body?: T | null;
}

export default class APIError<T> extends Error {
  name: string;
  response: HttpResponseConfig<T>;
  message: string;

  constructor({response, body}: APIErrorProps<T>) {
    super();
    this.name = 'APIError';
    this.response = response;
    this.message = `${response.status} - ${response.statusText}`;
  }
}
