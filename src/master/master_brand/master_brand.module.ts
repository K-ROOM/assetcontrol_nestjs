import { Module } from '@nestjs/common';
import { MasterBrandService } from './master_brand.service';
import { MasterBrandController } from './master_brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterBrand } from './entities/master_brand.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterBrand])],
  controllers: [MasterBrandController],
  providers: [MasterBrandService],
  exports: [MasterBrandService],
})
export class MasterBrandModule {}