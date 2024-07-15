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
    const entityManager = this.masterModelRepository.manager
    return this.masterModelRepository.query(`
    SELECT COUNT(*) AS modelcount FROM tblMaster_Model`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterCategory`;
  }

  update(id: number, updateMasterCategoryDto: UpdateMasterCategoryDto) {
    return `This action updates a #${id} masterCategory`;
  }

  remove(category: string) {
    return this.masterCategoryRepository.delete(category);
  }
}
