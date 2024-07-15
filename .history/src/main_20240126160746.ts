import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";

const port = process.env.PORT || 2000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://app.nipponexpress-necl.co.th:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();