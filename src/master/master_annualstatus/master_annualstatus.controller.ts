import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterAnnualstatusService } from './master_annualstatus.service';
import { CreateMasterAnnualstatusDto } from './dto/create-master_annualstatus.dto';
import { UpdateMasterAnnualstatusDto } from './dto/update-master_annualstatus.dto';

@Controller('masterannualstatus')
export class MasterAnnualstatusController {
  constructor(private readonly masterAnnualstatusService: MasterAnnualstatusService) {}

  @Post()
  create(@Body() createMasterAnnualstatusDto: CreateMasterAnnualstatusDto) {
    return this.masterAnnualstatusService.create(createMasterAnnualstatusDto);
  }

  @Get()
  findAll() {
    return this.masterAnnualstatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterAnnualstatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterAnnualstatusDto: UpdateMasterAnnualstatusDto) {
    return this.masterAnnualstatusService.update(+id, updateMasterAnnualstatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterAnnualstatusService.remove(+id);
  }
}
