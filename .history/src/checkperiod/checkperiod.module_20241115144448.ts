import { Module } from '@nestjs/common';
import { CheckperiodService } from './checkperiod.service';
import { CheckperiodController } from './checkperiod.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IpHeader])],
  controllers: [CheckperiodController],
  providers: [CheckperiodService]
})
export class CheckperiodModule {}
