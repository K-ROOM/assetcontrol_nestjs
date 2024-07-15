import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";

const port = process.env.PORT || 2000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://example.com',  // ระบุโดเมนที่เข้าถึงได้
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // ระบุ HTTP methods ที่อนุญาต
    credentials: true, // เปิดใช้งาน credentials (ถ้าจำเป็น)
  });
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();