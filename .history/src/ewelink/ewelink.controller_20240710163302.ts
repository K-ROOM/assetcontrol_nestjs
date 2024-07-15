// src/ewelink/ewelink.controller.ts

import { Controller, Get } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('devices')
  async getDevices() {
    try {
      return await this.ewelinkService.getDevices();
    } catch (error) {
      return { error: error.message };
    }
  }
}
