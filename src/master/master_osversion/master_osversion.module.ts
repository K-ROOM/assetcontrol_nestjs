import { Module } from '@nestjs/common';
import { MasterOsversionService } from './master_osversion.service';
import { MasterOsversionController } from './master_osversion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterOsversion } from './entities/master_osversion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOsversion])],
  controllers: [MasterOsversionController],
  providers: [MasterOsversionService],
  exports: [MasterOsversionService],
})
export class MasterOsversionModule {}