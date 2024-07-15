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
    const entityManager = this.masterModelRepository.manager
    return this.masterModelRepository.query(`
    SELECT COUNT(*) AS modelcount FROM tblMaster_Model`);
  }

  async findOne(subCategory: string) {
    console.log(subCategory)
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
