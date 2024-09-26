import { Module } from '@nestjs/common';
import { MasterOskeyService } from './master_oskey.service';
import { MasterOskeyController } from './master_oskey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOs])],
  controllers: [MasterOskeyController],
  providers: [MasterOskeyService],
  exports: [MasterOskeyService],
})
export class MasterOskeyModule {}
