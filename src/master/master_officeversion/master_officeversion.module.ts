import { Module } from '@nestjs/common';
import { MasterOfficeversionService } from './master_officeversion.service';
import { MasterOfficeversionController } from './master_officeversion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterOfficeversion } from './entities/master_officeversion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOfficeversion])],
  controllers: [MasterOfficeversionController],
  providers: [MasterOfficeversionService],
  exports: [MasterOfficeversionService]
})
export class MasterOfficeversionModule {}