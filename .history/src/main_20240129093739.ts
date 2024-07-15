import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import * as path from "path";
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const port = process.env.PORT || 2000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const corsOptions : CorsOptions = {
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 
  }
  app.enableCors();
  app.useStaticAssets(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/"));
  await app.listen(port);
}
bootstrap();