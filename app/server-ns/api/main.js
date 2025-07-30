import serverlessExpress from '@vendia/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../dist/main.js';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let server;

async function bootstrapServer() {
  if (!server) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    await app.init();
    server = serverlessExpress({ app: expressApp });
  }
  return server;
}

export const handler = async (event, context) => {
  const serverHandler = await bootstrapServer();
  return serverHandler(event, context);
};