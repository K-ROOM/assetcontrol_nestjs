import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterStatusService } from './master_status.service';
import { CreateMasterStatusDto } from './dto/create-master_status.dto';
import { UpdateMasterStatusDto } from './dto/update-master_status.dto';

@Controller('masterstatus')
export class MasterStatusController {
  constructor(private readonly masterStatusService: MasterStatusService) {}

  @Post()
  create(@Body() createMasterStatusDto: CreateMasterStatusDto) {
    return this.masterStatusService.create(createMasterStatusDto);
  }

  @Get()
  findAll() {
    return this.masterStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterStatusDto: UpdateMasterStatusDto) {
    return this.masterStatusService.update(+id, updateMasterStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterStatusService.remove(+id);
  }
}
