import { Module } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';
import { EwelinkController } from './ewelink.controller';

@Module({
  controllers: [EwelinkService],
  providers: [EwelinkController]
})
export class EwelinkModule {}
