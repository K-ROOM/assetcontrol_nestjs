import { Injectable } from '@nestjs/common';
import { CreateMasterModelDto } from './dto/create-master_model.dto';
import { UpdateMasterModelDto } from './dto/update-master_model.dto';
import { MasterModel } from './entities/master_model.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterModelService {
  constructor(
    @InjectRepository(MasterModel)
    private readonly masterModelRepository: Repository<MasterModel>,
  ) { }

  create(createMasterModelDto: CreateMasterModelDto) {
    return this.masterModelRepository.save(createMasterModelDto);
  }

  findAll() {
    return this.masterModelRepository.find();
  }

  findWithBrandAndSubCategory(brand: string, subCategory: string) {
    return this.masterModelRepository.find({
      select: ['edp_No', 'fin_No', 'category', 'subCategory', 'status', 'firstCheck', 'lastCheck', 'inputUser', 'modifiedBy', 'branchCode', 'userName', 'annualCheckStatus', 'brand', 'model'],
      where: {
        category: category,
        status: In(['Active', 'In Stock']),
      },
      order: {
        model: 'ASC'
      }
    });
  }

  findAllCount() {
    const entityManager = this.masterModelRepository.manager
    return this.masterModelRepository.query(`
    SELECT COUNT(*) AS modelcount FROM tblMaster_Model`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterModel`;
  }

  update(id: number, updateMasterModelDto: UpdateMasterModelDto) {
    return `This action updates a #${id} masterModel`;
  }

  remove(model: string) {
    return this.masterModelRepository.delete(model);
  }
}
