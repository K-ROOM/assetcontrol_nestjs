import { Module } from '@nestjs/common';
import { MasterLicenseService } from './master_license.service';
import { MasterLicenseController } from './master_license.controller';
import { MasterLicense } from './entities/master_license.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MasterLicense])],
  controllers: [MasterLicenseController],
  providers: [MasterLicenseService]
})
export class MasterLicenseModule {}
