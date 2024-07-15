import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterBrandService } from './master_brand.service';
import { CreateMasterBrandDto } from './dto/create-master_brand.dto';
import { UpdateMasterBrandDto } from './dto/update-master_brand.dto';

@Controller('masterbrand')
export class MasterBrandController {
  constructor(private readonly masterBrandService: MasterBrandService) {}

  @Post()
  create(@Body() createMasterBrandDto: CreateMasterBrandDto) {
    return this.masterBrandService.create(createMasterBrandDto);
  }

  @Get()
  findAll() {
    return this.masterBrandService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterBrandService.findAllCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterBrandService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterBrandDto: UpdateMasterBrandDto) {
    return this.masterBrandService.update(+id, updateMasterBrandDto);
  }

  @Delete(':brand')
  remove(@Param('brand') brand: string) {
    return this.masterBrandService.remove(brand);
  }
}
