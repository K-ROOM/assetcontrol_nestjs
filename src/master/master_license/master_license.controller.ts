import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterLicenseService } from './master_license.service';
import { CreateMasterLicenseDto } from './dto/create-master_license.dto';
import { UpdateMasterLicenseDto } from './dto/update-master_license.dto';

@Controller('masterlicense')
export class MasterLicenseController {
  constructor(private readonly masterLicenseService: MasterLicenseService) {}

  @Post()
  create(@Body() createMasterLicenseDto: CreateMasterLicenseDto) {
    return this.masterLicenseService.create(createMasterLicenseDto);
  }

  @Get()
  findAll() {
    return this.masterLicenseService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterLicenseService.findAllCount();
  }

  @Get(':osKey')
  findOne(@Param('osKey') osKey: string) {
    return this.masterLicenseService.findOne(osKey);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterLicenseDto: UpdateMasterLicenseDto) {
    return this.masterLicenseService.update(+id, updateMasterLicenseDto);
  }

  @Delete(':osKey')
  remove(@Param('osKey') osKey: string) {
    return this.masterLicenseService.remove(osKey);
  }
}
