import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EwelinkService } from './ewelink/ewelink.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EwelinkService],
})
export class AppModule {}
