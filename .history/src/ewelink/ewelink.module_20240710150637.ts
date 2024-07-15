import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EwelinkController } from './ewelink.controller';
import { EwelinkService } from './ewelink.service';

@Module({
  imports: [HttpModule],
  controllers: [EwelinkController],
  providers: [EwelinkService],
})
export class AppModule {}
