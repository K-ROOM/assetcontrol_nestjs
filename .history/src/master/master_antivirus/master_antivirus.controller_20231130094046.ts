import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterAntivirusService } from './master_antivirus.service';
import { CreateMasterAntivirusDto } from './dto/create-master_antivirus.dto';
import { UpdateMasterAntivirusDto } from './dto/update-master_antivirus.dto';

@Controller('masterantivirus')
export class MasterAntivirusController {
  constructor(private readonly masterAntivirusService: MasterAntivirusService) {}

  @Post()
  create(@Body() createMasterAntivirusDto: CreateMasterAntivirusDto) {
    return this.masterAntivirusService.create(createMasterAntivirusDto);
  }

  @Get('/asset')
  findAllSelect() {
    return this.masterAntivirusService.findAllSelect();
  }

  @Get()
  findAll() {
    return this.masterAntivirusService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterModelService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterAntivirusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterAntivirusDto: UpdateMasterAntivirusDto) {
    return this.masterAntivirusService.update(+id, updateMasterAntivirusDto);
  }

  @Delete(':antivirusVersion')
  remove(@Param('antivirusVersion') antivirusVersion: string) {
    return this.masterAntivirusService.remove(antivirusVersion);
  }
}
