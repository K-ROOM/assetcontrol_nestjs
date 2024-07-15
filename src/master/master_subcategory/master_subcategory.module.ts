import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterSubcategory } from './entities/master_subcategory.entity';
import { MasterSubcategoryController } from './master_subcategory.controller';
import { MasterSubcategoryService } from './master_subcategory.service';

@Module({
  imports: [TypeOrmModule.forFeature([MasterSubcategory])],
  controllers: [MasterSubcategoryController],
  providers: [MasterSubcategoryService],
  exports: [MasterSubcategoryService],
})
export class MasterSubcategoryModule {}