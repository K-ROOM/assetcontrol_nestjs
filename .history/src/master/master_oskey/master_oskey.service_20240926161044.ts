import { Injectable } from '@nestjs/common';
import { CreateMasterOskeyDto } from './dto/create-master_oskey.dto';
import { UpdateMasterOskeyDto } from './dto/update-master_oskey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterOskey } from './entities/master_oskey.entity';

@Injectable()
export class MasterOskeyService {
  constructor(
    @InjectRepository(MasterOskey)
    private readonly masterModelRepository: Repository<MasterOskey>,
  ) { }

  create(createMasterModelDto: CreateMasterModelDto) {
    return this.masterModelRepository.save(createMasterModelDto);
  }

  findAll() {
    return this.masterModelRepository.find();
  }

  findWithBrandAndSubCategory(brand: string, subCategory: string) {
    return this.masterModelRepository.find({
      select: ['subCategory', 'brand', 'model'],
      where: {
        brand: brand,
        subCategory: subCategory,
      },
      order: {
        model: 'ASC'
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} masterOskey`;
  }

  update(id: number, updateMasterOskeyDto: UpdateMasterOskeyDto) {
    return `This action updates a #${id} masterOskey`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterOskey`;
  }
}