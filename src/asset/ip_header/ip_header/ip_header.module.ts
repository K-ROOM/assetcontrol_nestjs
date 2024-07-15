import { Module } from '@nestjs/common';
import { IpHeaderService } from './ip_header.service';
import { IpHeaderController } from './ip_header.controller';
import { IpHeader } from './entities/ip_header.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([IpHeader])],
  controllers: [IpHeaderController],
  providers: [IpHeaderService]
})
export class IpHeaderModule {}
