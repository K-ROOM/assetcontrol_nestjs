import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterModelService } from './master_model.service';
import { CreateMasterModelDto } from './dto/create-master_model.dto';
import { UpdateMasterModelDto } from './dto/update-master_model.dto';

@Controller('mastermodel')
export class MasterModelController {
  constructor(private readonly masterModelService: MasterModelService) {}

  @Post()
  create(@Body() createMasterModelDto: CreateMasterModelDto) {
    return this.masterModelService.create(createMasterModelDto);
  }

  @Get()
  findAll() {
    return this.masterModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterModelDto: UpdateMasterModelDto) {
    return this.masterModelService.update(+id, updateMasterModelDto);
  }

  @Delete(':model')
  remove(@Param('model') model: string) {
    return this.masterModelService.remove(model);
  }
}
