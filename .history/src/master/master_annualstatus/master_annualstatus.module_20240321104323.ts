import { Module } from '@nestjs/common';
import { MasterAnnualstatusService } from './master_annualstatus.service';
import { MasterAnnualstatusController } from './master_annualstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  controllers: [MasterAnnualstatusController],
  providers: [MasterAnnualstatusService]
})
export class MasterAnnualstatusModule {}
