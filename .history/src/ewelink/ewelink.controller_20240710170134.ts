import { Controller, Get, Param } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('device/:deviceId')
  async getDeviceInfo(@Param('deviceId') deviceId: string) {
    console.log(deviceId);
    return this.ewelinkService.getDevice(deviceId);
  }
}
