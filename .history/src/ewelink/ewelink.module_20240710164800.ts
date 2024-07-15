// src/ewelink/ewelink.module.ts

import { Module, HttpModule } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Module({
  imports: [HttpModule], // Import HttpModule here
  providers: [EwelinkService],
  exports: [EwelinkService], // Export if needed by other modules
})
export class EwelinkModule {}
