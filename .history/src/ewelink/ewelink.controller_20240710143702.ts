import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EwelinkService } from './ewelink.service';
import { CreateEwelinkDto } from './dto/create-ewelink.dto';
import { UpdateEwelinkDto } from './dto/update-ewelink.dto';

@Controller('ewelink')
export class EwelinkController {
  constructor(private readonly ewelinkService: EwelinkService) {}

  @Post()
  create(@Body() createEwelinkDto: CreateEwelinkDto) {
    return this.ewelinkService.create(createEwelinkDto);
  }

  @Get()
  findAll() {
    return this.ewelinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ewelinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEwelinkDto: UpdateEwelinkDto) {
    return this.ewelinkService.update(+id, updateEwelinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ewelinkService.remove(+id);
  }
}
