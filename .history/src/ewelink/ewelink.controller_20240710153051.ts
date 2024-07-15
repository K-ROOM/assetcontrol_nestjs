import { Controller, Get, Query } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('data')
  async getData() {
    const data = await this.ewelinkService.getData();
    return data;
  }
}
