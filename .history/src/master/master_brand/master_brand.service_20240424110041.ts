import { Injectable } from '@nestjs/common';
import { CreateMasterBrandDto } from './dto/create-master_brand.dto';
import { UpdateMasterBrandDto } from './dto/update-master_brand.dto';
import { MasterBrand } from './entities/master_brand.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterBrandService {
  constructor(
    @InjectRepository(MasterBrand)
    private readonly masterBrandRepository: Repository<MasterBrand>,
  ) { }

  create(createMasterBrandDto: CreateMasterBrandDto) {
    return this.masterBrandRepository.save(createMasterBrandDto);
  }

  findAll() {
    return this.masterBrandRepository.find(
      order: {
        brand: 'ASC'
      },
    );
  }

  findAllCount() {
    const entityManager = this.masterBrandRepository.manager
    return this.masterBrandRepository.query(`
    SELECT COUNT(*) AS brandcount FROM tblMaster_Brand`);
  }

  findOne(brand: string) {
    return this.masterBrandRepository.findOne({
      where: { brand: brand },
    });
  }

  update(id: number, updateMasterBrandDto: UpdateMasterBrandDto) {
    return `This action updates a #${id} masterBrand`;
  }

  remove(brand: string) {
    return this.masterBrandRepository.delete(brand);
  }
}
