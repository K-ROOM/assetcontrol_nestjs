import { Module } from '@nestjs/common';
import { AssetSpareService } from './asset_spare.service';
import { AssetSpareController } from './asset_spare.controller';
import { AssetSpare } from './entities/asset_spare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterSubcategory } from 'src/master/master_subcategory/entities/master_subcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssetSpare, MasterSubcategory])],
  controllers: [AssetSpareController],
  providers: [AssetSpareService],
  exports: [AssetSpareService],
})
export class AssetSpareModule {}
