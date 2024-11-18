import { Module } from '@nestjs/common';
import { CheckperiodDetailService } from './checkperiod_detail.service';
import { CheckperiodDetailController } from './checkperiod_detail.controller';

@Module({
  controllers: [CheckperiodDetailController],
  providers: [CheckperiodDetailService]

  imports: [TypeOrmModule.forFeature([AssetHeader, MasterSubcategory])],
  controllers: [AssetHeaderController],
  providers: [CheckperiodDetailService],
  exports: [CheckperiodDetailService],
})
export class CheckperiodDetailModule {}
