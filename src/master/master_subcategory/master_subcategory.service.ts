import { Injectable } from '@nestjs/common';
import { CreateMasterSubcategoryDto } from './dto/create-master_subcategory.dto';
import { UpdateMasterSubcategoryDto } from './dto/update-master_subcategory.dto';
import { MasterSubcategory } from './entities/master_subcategory.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterSubcategoryService {
  constructor(
    @InjectRepository(MasterSubcategory)
    private readonly masterSubCategoryRepository: Repository<MasterSubcategory>,
  ) { }

  create(createMasterSubcategoryDto: CreateMasterSubcategoryDto) {
    return this.masterSubCategoryRepository.save(createMasterSubcategoryDto);
  }

  findAll() {
    return this.masterSubCategoryRepository.find();
  }

  findByCategory(category) {
    return this.masterSubCategoryRepository.find({
      select: ['subCategory', 'category'],
      where: { category: category },
    });
  }

  findAllCount() {
    const entityManager = this.masterSubCategoryRepository.manager
    return this.masterSubCategoryRepository.query(`
    SELECT COUNT(*) AS subcategorycount FROM tblMaster_SubCategory`);
  }

  async findOne(subCategory: string) {
    return await this.masterSubCategoryRepository.findOne({
      where: { subCategory: subCategory },
    });
  }

  update(subCategory: string, updateMasterSubcategoryDto: UpdateMasterSubcategoryDto) {
    return this.masterSubCategoryRepository.update(subCategory, updateMasterSubcategoryDto);
  }

  remove(subCategory: string) {
    return this.masterSubCategoryRepository.delete(subCategory);
  }
}
