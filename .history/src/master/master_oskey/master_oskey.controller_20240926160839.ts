import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterOskeyService } from './master_oskey.service';
import { CreateMasterOskeyDto } from './dto/create-master_oskey.dto';
import { UpdateMasterOskeyDto } from './dto/update-master_oskey.dto';

@Controller('masteroskey')
export class MasterOskeyController {
  constructor(private readonly masterOskeyService: MasterOskeyService) {}

  @Post()
  create(@Body() createMasterOskeyDto: CreateMasterOskeyDto) {
    return this.masterOskeyService.create(createMasterOskeyDto);
  }

  @Get()
  findAll() {
    return this.masterOskeyService.findAll();
  }

  @Get('/:osLicenseType')
  findWithBrandAndSubCategory(@Param('osLicenseType') osLicenseType: string) {
    return this.masterOskeyService.findWithBrandAndSubCategory(osLicenseType);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterOskeyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterOskeyDto: UpdateMasterOskeyDto) {
    return this.masterOskeyService.update(+id, updateMasterOskeyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterOskeyService.remove(+id);
  }
}
