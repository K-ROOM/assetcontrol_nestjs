import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 1112

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();