import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

interface HttpRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

export interface HttpResponseConfig<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

class HttpClient {
  baseURL: string;

  constructor(baseUrl: string) {
    this.baseURL = baseUrl;
  }

  async makeRequest<T>(
    path: string,
    options?: HttpRequestConfig,
  ): Promise<HttpResponseConfig<T>> {
    await delay(2000);

    const headers = new Headers();

    if (options?.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options?.headers) {
      Object.entries(options.headers).forEach(([headerName, headerValue]) => {
        headers.append(headerName, headerValue);
      });
    }

    const response = await fetch(`${this.baseURL}${path}`, {
      method: options?.method,
      body: JSON.stringify(options?.body),
      headers,
    });

    let responseBody: T | null = null;

    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = (await response.json()) as T;
    }

    const httpResponse: HttpResponseConfig<T> = {
      data: responseBody,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
    };

    if (response.ok) {
      return httpResponse;
    }

    throw new APIError({response: httpResponse, body: responseBody});
  }

  get<T>(
    path: string,
    options?: HttpRequestConfig,
  ): Promise<HttpResponseConfig<T>> {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    }) as Promise<HttpResponseConfig<T>>;
  }

  post(path: string, options?: HttpRequestConfig): Promise<HttpResponseConfig> {
    return this.makeRequest(path, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    }) as Promise<HttpResponseConfig>;
  }

  put(path: string, options?: HttpRequestConfig): Promise<HttpResponseConfig> {
    return this.makeRequest(path, {
      method: 'PUT',
      body: options?.body,
      headers: options?.headers,
    }) as Promise<HttpResponseConfig>;
  }

  delete(
    path: string,
    options?: HttpRequestConfig,
  ): Promise<HttpResponseConfig> {
    return this.makeRequest(path, {
      method: 'DELETE',
      headers: options?.headers,
    }) as Promise<HttpResponseConfig>;
  }
}

export default HttpClient;
