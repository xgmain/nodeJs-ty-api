import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import apicache from 'apicache';
import mongoose from 'mongoose';

import v1MusicRouter from './v1/routes/musicRoutes.js';
import { seedData } from './database/seeding.js';

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
});

database.once('connected', () => {
  console.log('Database Connected');
});

const app = express();

seedData();

const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cache("2 minutes"));
app.use("/api/v1/musics", v1MusicRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
