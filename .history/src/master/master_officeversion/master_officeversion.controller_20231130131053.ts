import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterOfficeversionService } from './master_officeversion.service';
import { CreateMasterOfficeversionDto } from './dto/create-master_officeversion.dto';
import { UpdateMasterOfficeversionDto } from './dto/update-master_officeversion.dto';

@Controller('masterofficeversion')
export class MasterOfficeversionController {
  constructor(private readonly masterOfficeversionService: MasterOfficeversionService) {}

  @Post()
  create(@Body() createMasterOfficeversionDto: CreateMasterOfficeversionDto) {
    return this.masterOfficeversionService.create(createMasterOfficeversionDto);
  }

  @Get()
  findAll() {
    return this.masterOfficeversionService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterModelService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterOfficeversionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterOfficeversionDto: UpdateMasterOfficeversionDto) {
    return this.masterOfficeversionService.update(+id, updateMasterOfficeversionDto);
  }

  @Delete(':officeVersion')
  remove(@Param('officeVersion') officeVersion: string) {
    return this.masterOfficeversionService.remove(officeVersion);
  }
}
