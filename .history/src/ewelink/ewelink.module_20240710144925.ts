import { Module } from '@nestjs/common';
import { EWeLinkService } from './ewelink.service';
import { EwelinkController } from './ewelink.controller';

@Module({
  controllers: [EwelinkController],
  providers: [EwelinkService]
})
export class EwelinkModule {}
