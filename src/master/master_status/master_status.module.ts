import { Module } from '@nestjs/common';
import { MasterStatusService } from './master_status.service';
import { MasterStatusController } from './master_status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterStatus } from './entities/master_status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterStatus])],
  controllers: [MasterStatusController],
  providers: [MasterStatusService],
  exports: [MasterStatusService],
})
export class MasterStatusModule {}
