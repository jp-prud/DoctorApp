import mongoose from 'mongoose';

export const MongoClient = {
  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL || 'localhost:27017';
    const username = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;

    mongoose.connect(url, {
      user: username,
      pass: password,
    });
  },
};
