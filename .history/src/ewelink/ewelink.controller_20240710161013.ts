import { Controller, Get, Param } from '@nestjs/common';
import { EweLinkService } from './ewelink.service';

@Controller('ewe')
export class EweLinkController {
  constructor(private readonly eweLinkService: EweLinkService) {}

  @Get(':deviceId/status')
  async getDeviceStatus(@Param('deviceId') deviceId: string) {
    try {
      const status = await this.eweLinkService.getDeviceStatus(deviceId);
      return { status };
    } catch (error) {
      return { error: error.message };
    }
  }
}
