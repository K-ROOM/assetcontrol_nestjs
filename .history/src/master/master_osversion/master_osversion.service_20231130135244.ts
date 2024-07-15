import { Injectable } from '@nestjs/common';
import { CreateMasterOsversionDto } from './dto/create-master_osversion.dto';
import { UpdateMasterOsversionDto } from './dto/update-master_osversion.dto';
import { MasterOsversion } from './entities/master_osversion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterOsversionService {
  constructor(
    @InjectRepository(MasterOsversion)
    private readonly masterOSversionRepository: Repository<MasterOsversion>,
  ) { }

  create(createMasterOsversionDto: CreateMasterOsversionDto) {
    return 'This action adds a new masterOsversion';
  }

  findAll() {
    return this.masterOSversionRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterOSversionRepository.manager
    return this.masterOSversionRepository.query(`
    SELECT COUNT(*) AS osversioncount FROM tblMaster_Model`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterOsversion`;
  }

  update(id: number, updateMasterOsversionDto: UpdateMasterOsversionDto) {
    return `This action updates a #${id} masterOsversion`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterOsversion`;
  }
}
