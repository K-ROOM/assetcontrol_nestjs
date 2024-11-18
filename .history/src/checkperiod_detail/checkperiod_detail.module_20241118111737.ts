import { Module } from '@nestjs/common';
import { CheckperiodDetailService } from './checkperiod_detail.service';
import { CheckperiodDetailController } from './checkperiod_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckperiodDetail } from './entities/checkperiod_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature(CheckperiodDetail[])],
  controllers: [CheckperiodDetailController],
  providers: [CheckperiodDetailService],
  exports: [CheckperiodDetailService],
})
export class CheckperiodDetailModule {}
