import { Module } from '@nestjs/common';
import { EWeLinkService } from './ewelink.service';
import { EWeLinkController } from './ewelink.controller';

@Module({
  controllers: [EwelinkController],
  providers: [EwelinkService]
})
export class EwelinkModule {}
