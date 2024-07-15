import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterOsversionService } from './master_osversion.service';
import { CreateMasterOsversionDto } from './dto/create-master_osversion.dto';
import { UpdateMasterOsversionDto } from './dto/update-master_osversion.dto';

@Controller('masterosversion')
export class MasterOsversionController {
  constructor(private readonly masterOsversionService: MasterOsversionService) {}

  @Post()
  create(@Body() createMasterOsversionDto: CreateMasterOsversionDto) {
    return this.masterOsversionService.create(createMasterOsversionDto);
  }

  @Get()
  findAll() {
    return this.masterOsversionService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterModelService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterOsversionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterOsversionDto: UpdateMasterOsversionDto) {
    return this.masterOsversionService.update(+id, updateMasterOsversionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterOsversionService.remove(+id);
  }
}
