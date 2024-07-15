import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { EweLinkController } from './ewelink.controller';
import { EweLinkService } from './ewelink.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [EweLinkController],
  providers: [EweLinkService],
})
export class EwelinkModule {}
