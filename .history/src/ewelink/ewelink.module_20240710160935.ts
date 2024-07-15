import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EweLinkController } from './ewelink.controller';
import { EwelinkService } from './ewelink.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [EwelinkController],
  providers: [EwelinkService],
})
export class EwelinkModule {}
