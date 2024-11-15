import { Module } from '@nestjs/common';
import { CheckperiodService } from './checkperiod.service';
import { CheckperiodController } from './checkperiod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Checkperiod } from './entities/checkperiod.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Checkperiod])],
  controllers: [CheckperiodController],
  providers: [CheckperiodService]
})
export class CheckperiodModule {}
