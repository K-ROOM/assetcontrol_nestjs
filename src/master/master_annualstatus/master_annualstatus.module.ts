import { Module } from '@nestjs/common';
import { MasterAnnualstatusService } from './master_annualstatus.service';
import { MasterAnnualstatusController } from './master_annualstatus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterAnnualstatus } from './entities/master_annualstatus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterAnnualstatus])],
  controllers: [MasterAnnualstatusController],
  providers: [MasterAnnualstatusService]
})
export class MasterAnnualstatusModule {}
