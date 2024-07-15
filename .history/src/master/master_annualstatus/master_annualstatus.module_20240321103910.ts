import { Module } from '@nestjs/common';
import { MasterAnnualstatusService } from './master_annualstatus.service';
import { MasterAnnualstatusController } from './master_annualstatus.controller';

@Module({
  controllers: [MasterAnnualstatusController],
  providers: [MasterAnnualstatusService]
})
export class MasterAnnualstatusModule {}
