import { Module } from '@nestjs/common';
import { MasterModel } from './entities/master_model.entity';
import { MasterModelService } from './master_model.service';
import { MasterModelController } from './master_model.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MasterModel])],
  controllers: [MasterModelController],
  providers: [MasterModelService],
  exports: [MasterModelService],
})
export class MasterModelModule {}
