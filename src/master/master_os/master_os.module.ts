import { Module } from '@nestjs/common';
import { MasterOsService } from './master_os.service';
import { MasterOsController } from './master_os.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterOS } from './entities/master_os.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterOS])],
  controllers: [MasterOsController],
  providers: [MasterOsService],
  exports: [MasterOsService],
})
export class MasterOsModule {}
