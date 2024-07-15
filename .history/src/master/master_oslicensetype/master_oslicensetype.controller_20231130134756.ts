import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterOslicensetypeService } from './master_oslicensetype.service';
import { CreateMasterOslicensetypeDto } from './dto/create-master_oslicensetype.dto';
import { UpdateMasterOslicensetypeDto } from './dto/update-master_oslicensetype.dto';

@Controller('masteroslicensetype')
export class MasterOslicensetypeController {
  constructor(private readonly masterOslicensetypeService: MasterOslicensetypeService) {}

  @Post()
  create(@Body() createMasterOslicensetypeDto: CreateMasterOslicensetypeDto) {
    return this.masterOslicensetypeService.create(createMasterOslicensetypeDto);
  }

  @Get()
  findAll() {
    return this.masterOslicensetypeService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterModelService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterOslicensetypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterOslicensetypeDto: UpdateMasterOslicensetypeDto) {
    return this.masterOslicensetypeService.update(+id, updateMasterOslicensetypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterOslicensetypeService.remove(+id);
  }
}
