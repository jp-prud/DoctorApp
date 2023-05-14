import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import { config } from 'dotenv';
import { errors } from 'celebrate';

import { MongoClient } from '../database/mongo';
import errorHandler from './middlewares/errorHandler';
import router from './routes';

const PORT = process.env.PORT || 3001;

async function main() {
  config();

  try {
    await MongoClient.connect();

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(router);
    app.use(errors());
    app.use(errorHandler);

    app.listen(Number(PORT), '0.0.0.0', () =>
      console.log(`🔥 Server is running in http://localhost:${PORT}`),
    );
  } catch (error) {
    console.log(error);
  }
}

main();
