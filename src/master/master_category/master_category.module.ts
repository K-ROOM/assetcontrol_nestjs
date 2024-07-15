import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterCategoryController } from './master_category.controller';
import { MasterCategoryService } from './master_category.service';
import { MasterCategory } from './entities/master_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterCategory])],
  controllers: [MasterCategoryController],
  providers: [MasterCategoryService]
})
export class MasterCategoryModule {}
