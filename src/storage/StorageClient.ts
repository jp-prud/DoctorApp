import AsyncStorage from '@react-native-async-storage/async-storage';

// import delay from '@utils/delay';

class StorageClient {
  entityKey: string;

  constructor(entityKey: string) {
    this.entityKey = entityKey;
  }

  async list<T>() {
   // await // delay();

    const storage = await AsyncStorage.getItem(this.entityKey);

    const response: T[] = storage ? JSON.parse(storage) : [];

    return response;
  }

  async show<T>() {
   // await // delay();

    const storage = await AsyncStorage.getItem(this.entityKey)

    const response: T = storage ? JSON.parse(storage) : null;

    return response
  }

  async store<T>(payload: T): Promise<void> {
   // await // delay();

    return await AsyncStorage.setItem(this.entityKey, JSON.stringify(payload));
  }

  // async update<T>(id: string, payload: T) {
  //  // await // delay();

  // }

  async delete(id: string) {
    //// await // delay();

    // return await AsyncStorage.removeItem(this.entityKey);
  }

  async removeEntity() {
   // await // delay();

    return await AsyncStorage.removeItem(this.entityKey);
  }
}

export default StorageClient;
