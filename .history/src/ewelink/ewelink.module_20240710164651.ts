// src/app.module.ts

import { Module } from '@nestjs/common';
import { EwelinkController } from './ewelink.controller';
import { EwelinkService } from './ewelink.service';
import { HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpService],
  controllers: [EwelinkController],
  providers: [EwelinkService],
  exports: [EwelinkService], // Export the service if needed
})
export class EwelinkModule {}
