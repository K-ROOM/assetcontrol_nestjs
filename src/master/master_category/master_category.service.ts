import { Injectable } from '@nestjs/common';
import { CreateMasterCategoryDto } from './dto/create-master_category.dto';
import { UpdateMasterCategoryDto } from './dto/update-master_category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterCategory } from './entities/master_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MasterCategoryService {
  constructor(
    @InjectRepository(MasterCategory)
    private readonly masterCategoryRepository: Repository<MasterCategory>,
  ) { }

  create(createMasterCategoryDto: CreateMasterCategoryDto) {
    return this.masterCategoryRepository.save(createMasterCategoryDto);
  }

  findAll() {
    return this.masterCategoryRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterCategoryRepository.manager
    return this.masterCategoryRepository.query(`
    SELECT COUNT(*) AS categorycount FROM tblMaster_Category`);
  }

  findOne(category: string) {
    return this.masterCategoryRepository.findOne({
      where: { category: category },
    });
  }

  update(id: number, updateMasterCategoryDto: UpdateMasterCategoryDto) {
    return `This action updates a #${id} masterCategory`;
  }

  remove(category: string) {
    return this.masterCategoryRepository.delete(category);
  }
}
