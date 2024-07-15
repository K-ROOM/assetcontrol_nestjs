// src/app.module.ts

import { Module } from '@nestjs/common';
import { EwelinkController } from './ewelink.controller';


@Module({
  imports: [],
  controllers: [EwelinkController],
  providers: [EwelinkService],
  exports: [EwelinkService], // Export the service if needed
})
export class AppModule {}
