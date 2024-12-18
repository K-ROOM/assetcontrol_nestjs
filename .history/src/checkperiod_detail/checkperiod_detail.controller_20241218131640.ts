import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckperiodDetailService } from './checkperiod_detail.service';
import { CreateCheckperiodDetailDto } from './dto/create-checkperiod_detail.dto';
import { UpdateCheckperiodDetailDto } from './dto/update-checkperiod_detail.dto';

@Controller('checkperiod-detail')
export class CheckperiodDetailController {
  constructor(private readonly checkperiodDetailService: CheckperiodDetailService) {}

  @Post()
  create(@Body() createCheckperiodDetailDto: CreateCheckperiodDetailDto) {
    return this.checkperiodDetailService.create(createCheckperiodDetailDto);
  }

  @Get()
  findAll(@Param('id') id: string) {
    return this.checkperiodDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkperiodDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckperiodDetailDto: UpdateCheckperiodDetailDto) {
    return this.checkperiodDetailService.update(+id, updateCheckperiodDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkperiodDetailService.remove(+id);
  }
}
