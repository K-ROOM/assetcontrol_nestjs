import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";

const port = process.env.PORT || 2000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://your-allowed-origin.com', // หรือ ['http://origin1.com', 'http://origin2.com'] สำหรับหลาย origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();