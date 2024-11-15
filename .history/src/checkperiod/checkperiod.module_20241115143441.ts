import { Module } from '@nestjs/common';
import { CheckperiodService } from './checkperiod.service';
import { CheckperiodController } from './checkperiod.controller';

@Module({
  controllers: [CheckperiodController],
  providers: [CheckperiodService]
})
export class CheckperiodModule {}
