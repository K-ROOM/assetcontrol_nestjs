import { Injectable } from '@nestjs/common';
import { CreateMasterOfficeversionDto } from './dto/create-master_officeversion.dto';
import { UpdateMasterOfficeversionDto } from './dto/update-master_officeversion.dto';
import { MasterOfficeversion } from './entities/master_officeversion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterOfficeversionService {
  constructor(
    @InjectRepository(MasterOfficeversion)
    private readonly masterOfficeversionRepository: Repository<MasterOfficeversion>,
  ) { }

  create(createMasterOfficeversionDto: CreateMasterOfficeversionDto) {
    return this.masterOfficeversionRepository.save(createMasterOfficeversionDto);
  }

  findAll() {
    return this.masterOfficeversionRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterOfficeversionRepository.manager
    return this.masterOfficeversionRepository.query(`
    SELECT COUNT(*) AS modelcount FROM tblMaster_Model`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterOfficeversion`;
  }

  update(id: number, updateMasterOfficeversionDto: UpdateMasterOfficeversionDto) {
    return `This action updates a #${id} masterOfficeversion`;
  }

  remove(officeVersion: string) {
    return this.masterOfficeversionRepository.delete(officeVersion);
  }
}
