import AsyncStorage from '@react-native-async-storage/async-storage';

import delay from '@utils/delay';

class StorageClient {
  entityKey: string;

  constructor(entityKey: string) {
    this.entityKey = entityKey;
  }

  async list<T>() {
    await delay();

    const storage = await AsyncStorage.getItem(this.entityKey);

    const response: T[] = storage ? JSON.parse(storage) : [];

    console.log('entrou storage client');

    console.log({storage, response}, this.entityKey);

    return response;
  }

  // async show(id: string) {
  //   await delay();

  // }

  async store<T>(payload: T): Promise<void> {
    await delay();

    return await AsyncStorage.setItem(this.entityKey, JSON.stringify(payload));
  }

  // async update<T>(id: string, payload: T) {
  //   await delay();

  // }

  // async delete(id: string) {
  //   await delay();

  // }
}

export default StorageClient;
