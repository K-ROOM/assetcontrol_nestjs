import { Module } from '@nestjs/common';
import { MasterOskeyService } from './master_oskey.service';
import { MasterOskeyController } from './master_oskey.controller';

@Module({
  controllers: [MasterOskeyController],
  providers: [MasterOskeyService]
})
export class MasterOskeyModule {}
