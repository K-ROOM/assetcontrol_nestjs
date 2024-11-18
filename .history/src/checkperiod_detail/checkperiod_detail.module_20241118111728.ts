import { Module } from '@nestjs/common';
import { CheckperiodDetailService } from './checkperiod_detail.service';
import { CheckperiodDetailController } from './checkperiod_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature(Check)],
  controllers: [CheckperiodDetailController],
  providers: [CheckperiodDetailService],
  exports: [CheckperiodDetailService],
})
export class CheckperiodDetailModule {}
