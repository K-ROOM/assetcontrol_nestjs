import { Injectable } from '@nestjs/common';
import { CreateMasterOslicensetypeDto } from './dto/create-master_oslicensetype.dto';
import { UpdateMasterOslicensetypeDto } from './dto/update-master_oslicensetype.dto';
import { MasterOslicensetype } from './entities/master_oslicensetype.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterOslicensetypeService {
  constructor(
    @InjectRepository(MasterOslicensetype)
    private readonly masterOSlicensetypeRepository: Repository<MasterOslicensetype>,
  ) { }

  create(createMasterOslicensetypeDto: CreateMasterOslicensetypeDto) {
    return 'This action adds a new masterOslicensetype';
  }

  findAll() {
    return this.masterOSlicensetypeRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterOSlicensetypeRepository.manager
    return this.masterOSlicensetypeRepository.query(`
    SELECT COUNT(*) AS oslicensetypecount FROM MasterOSLicenseType`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterOslicensetype`;
  }

  update(id: number, updateMasterOslicensetypeDto: UpdateMasterOslicensetypeDto) {
    return `This action updates a #${id} masterOslicensetype`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterOslicensetype`;
  }
}
