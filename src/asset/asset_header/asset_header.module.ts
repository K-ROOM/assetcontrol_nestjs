import { Module } from "@nestjs/common";
import { AssetHeader } from "./entities/asset_header.entity";
import { AssetHeaderController } from "./asset_header.controller";
import { AssetHeaderService } from "./asset_header.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterSubcategory } from "src/master/master_subcategory/entities/master_subcategory.entity";

@Module({
  imports: [TypeOrmModule.forFeature([AssetHeader, MasterSubcategory])],
  controllers: [AssetHeaderController],
  providers: [AssetHeaderService],
  exports: [AssetHeaderService],
})
export class AssetHeaderModule {}
