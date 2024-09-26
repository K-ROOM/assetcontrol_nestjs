import { Module } from '@nestjs/common';
import { MasterOskeyService } from './master_oskey.service';
import { MasterOskeyController } from './master_oskey.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterOskey } from './entities/master_oskey.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOskey])],
  controllers: [MasterOskeyController],
  providers: [MasterOskeyService],
  exports: [MasterOskeyService],
})
export class MasterOskeyModule {}
