import { Module } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';
import { EwelinkController } from './ewelink.controller';

@Module({
  controllers: [EWeLinkController],
  providers: [EWeLinkService]
})
export class EwelinkModule {}
