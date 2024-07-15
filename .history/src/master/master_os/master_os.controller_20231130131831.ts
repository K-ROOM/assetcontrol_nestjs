import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterOsService } from './master_os.service';
import { CreateMasterODto } from './dto/create-master_o.dto';
import { UpdateMasterODto } from './dto/update-master_o.dto';

@Controller('masteros')
export class MasterOsController {
  constructor(private readonly masterOsService: MasterOsService) {}

  @Post()
  create(@Body() createMasterODto: CreateMasterODto) {
    return this.masterOsService.create(createMasterODto);
  }

  @Get()
  findAll() {
    return this.masterOsService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterModelService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterOsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterODto: UpdateMasterODto) {
    return this.masterOsService.update(+id, updateMasterODto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterOsService.remove(+id);
  }
}
