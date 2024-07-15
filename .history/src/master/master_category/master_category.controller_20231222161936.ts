import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterCategoryService } from './master_category.service';
import { CreateMasterCategoryDto } from './dto/create-master_category.dto';
import { UpdateMasterCategoryDto } from './dto/update-master_category.dto';

@Controller('mastercategory')
export class MasterCategoryController {
  constructor(private readonly masterCategoryService: MasterCategoryService) {}

  @Post()
  create(@Body() createMasterCategoryDto: CreateMasterCategoryDto) {
    return this.masterCategoryService.create(createMasterCategoryDto);
  }

  @Get()
  findAll() {
    return this.masterCategoryService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.masterCategoryService.findAllCount();
  }

  @Get(':category')
  findOne(@Param('category') category: string) {
    return this.masterCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterCategoryDto: UpdateMasterCategoryDto) {
    return this.masterCategoryService.update(+id, updateMasterCategoryDto);
  }

  @Delete(':category')
  remove(@Param('category') category: string) {
    return this.masterCategoryService.remove(category);
  }
}
