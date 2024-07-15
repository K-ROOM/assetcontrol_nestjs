import { Controller, Get, Query } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Get('data')
  async getData(@Query('username') username: string, @Query('password') password: string) {
    const data = await this.ewelinkService.getData(username, password);
    return data;
  }
}
