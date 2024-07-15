import { Controller, Get } from '@nestjs/common';
import { EwelinkService } from './ewelink/ewelink.service';

@Controller()
export class AppController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('devices')
  async getDevices() {
    return this.ewelinkService.getDevices();
  }
}
