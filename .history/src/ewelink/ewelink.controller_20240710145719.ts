import { Controller, Get } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('devices')
  async getDevices() {
    return this.ewelinkService.getDevices();
  }
}
