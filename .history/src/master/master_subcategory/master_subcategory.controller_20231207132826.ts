import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MasterSubcategoryService } from './master_subcategory.service';
import { CreateMasterSubcategoryDto } from './dto/create-master_subcategory.dto';
import { UpdateMasterSubcategoryDto } from './dto/update-master_subcategory.dto';

@Controller('mastersubcategory')
export class MasterSubcategoryController {
  constructor(private readonly masterSubcategoryService: MasterSubcategoryService) {}

  @Post()
  create(@Body() createMasterSubcategoryDto: CreateMasterSubcategoryDto) {
    return this.masterSubcategoryService.create(createMasterSubcategoryDto);
  }

  @Get()
  findAll() {
    return this.masterSubcategoryService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterSubcategoryService.findAllCount();
  }

  @Get('/findbycategory')
  findByCategory(@Query('category') category: string) {
    return this.masterSubcategoryService.findByCategory(category);
  }

  @Get(':subCategory')
  findOne(@Param('subCategory') subCategory: string) {
    return this.masterSubcategoryService.findOne(subCategory);
  }

  @Patch(':subCategory')
  update(@Param('subCategory') subCategory: string, @Body() updateMasterSubcategoryDto: UpdateMasterSubcategoryDto) {
    return this.masterSubcategoryService.update(subCategory, updateMasterSubcategoryDto);
  }

  @Delete(':subCategory')
  remove(@Param('subCategory') subCategory: string) {
    return this.masterSubcategoryService.remove(subCategory);
  }
}
