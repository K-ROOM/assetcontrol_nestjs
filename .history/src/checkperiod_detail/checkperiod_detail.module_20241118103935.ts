import { Module } from '@nestjs/common';
import { CheckperiodDetailService } from './checkperiod_detail.service';
import { CheckperiodDetailController } from './checkperiod_detail.controller';

@Module({
  controllers: [CheckperiodDetailController],
  providers: [CheckperiodDetailService]
})
export class CheckperiodDetailModule {}
