import { Module } from '@nestjs/common';
import { MasterOslicensetypeService } from './master_oslicensetype.service';
import { MasterOslicensetypeController } from './master_oslicensetype.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterOslicensetype } from './entities/master_oslicensetype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOslicensetype])],
  controllers: [MasterOslicensetypeController],
  providers: [MasterOslicensetypeService],
  exports: [MasterOslicensetypeService],
})
export class MasterOslicensetypeModule {}
