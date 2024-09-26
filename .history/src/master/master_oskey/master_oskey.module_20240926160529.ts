import { Module } from '@nestjs/common';
import { MasterOskeyService } from './master_oskey.service';
import { MasterOskeyController } from './master_oskey.controller';

@Module({
  controllers: [MasterOskeyController],
  providers: [MasterOskeyService]
})
@Module({
  imports: [TypeOrmModule.forFeature([MasterOS])],
  controllers: [MasterOsController],
  providers: [MasterOsService],
  exports: [MasterOsService],
})
export class MasterOskeyModule {}
