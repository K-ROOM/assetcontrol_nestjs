import { Controller, Get, Param } from '@nestjs/common';
import { EweLinkService } from './ewelink.service';

@Controller('ewelink')
export class DevicesController {
  constructor(private readonly eweLinkService: EweLinkService) {}

  @Get('/:deviceId')
  async getDevice(@Param('deviceId') deviceId: string): Promise<any> {
    try {
      const deviceInfo = await this.eweLinkService.getDeviceInformation(deviceId);
      return deviceInfo;
    } catch (error) {
      console.log('x');
      return { error: error.message };
    }
  }
}
