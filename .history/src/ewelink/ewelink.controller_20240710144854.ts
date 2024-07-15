import { Controller, Get, Param } from '@nestjs/common';
import { EWeLinkService } from './ewelink.service';

@Controller('ewelink')
export class EWeLinkController {
  constructor(private readonly ewelinkService: EWeLinkService) {}

  @Get('/devices/:deviceId')
  async getTemperature(@Param('deviceId') deviceId: string) {
    return await this.ewelinkService.getTemperature(deviceId);
  }
}