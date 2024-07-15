import { Module } from '@nestjs/common';
import { MasterAntivirusService } from './master_antivirus.service';
import { MasterAntivirusController } from './master_antivirus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterAntivirus } from './entities/master_antivirus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterAntivirus])],
  controllers: [MasterAntivirusController],
  providers: [MasterAntivirusService]
})
export class MasterAntivirusModule {}