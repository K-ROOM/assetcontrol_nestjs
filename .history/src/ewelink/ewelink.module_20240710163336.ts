// src/app.module.ts

import { Module } from '@nestjs/common';


@Module({
  imports: [],
  controllers: [EwelinkController],
  providers: [EwelinkService],
  exports: [EwelinkService], // Export the service if needed
})
export class AppModule {}
