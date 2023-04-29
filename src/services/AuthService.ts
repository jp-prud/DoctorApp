import StorageClient from "@storage/StorageClient";

import { AUTHENTICATED_CONSUMER_KEY } from '@storage/StorageConfig'

interface ConsumerDTO {
  email: string
  password: string
}

class AuthService {
  storageClient: StorageClient;

  constructor() {
    this.storageClient = new StorageClient(AUTHENTICATED_CONSUMER_KEY);
  }

  validate() {
    return this.storageClient.show();
  }

  connect() {
    return this.storageClient.store<ConsumerDTO>({
      email: 'email-test@mail.com',
      password: '1123'
    });
  }

  logout() {
    return this.storageClient.removeEntity();
  }
}

export default new AuthService();
