import { Module } from '@nestjs/common';
import { MasterAnnualstatusService } from './master_annualstatus.service';
import { MasterAnnualstatusController } from './master_annualstatus.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterAntivirus])],
  controllers: [MasterAnnualstatusController],
  providers: [MasterAnnualstatusService]
})
export class MasterAnnualstatusModule {}
