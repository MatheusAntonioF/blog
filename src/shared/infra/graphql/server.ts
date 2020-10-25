import 'reflect-metadata';
import { createConnection } from 'typeorm';

async function start() {
  await createConnection();
}

start();
