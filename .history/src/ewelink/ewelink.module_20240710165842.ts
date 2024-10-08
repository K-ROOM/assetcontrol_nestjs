import { Module } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // Import HttpModule here
  providers: [EweLinkService],
  exports: [EweLinkService], // Export if needed by other modules
})
export class EwelinkModule {}
