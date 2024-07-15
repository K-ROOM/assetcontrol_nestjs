import { Injectable } from '@nestjs/common';
import { CreateMasterLicenseDto } from './dto/create-master_license.dto';
import { UpdateMasterLicenseDto } from './dto/update-master_license.dto';
import { MasterLicense } from './entities/master_license.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterLicenseService {
  constructor(
    @InjectRepository(MasterLicense)
    private readonly masterLicenseRepository: Repository<MasterLicense>,
  ) { }

  create(createMasterLicenseDto: CreateMasterLicenseDto) {
    return this.masterLicenseRepository.save(createMasterLicenseDto);
  }

  findAll() {
    return this.masterLicenseRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterLicenseRepository.manager
    return this.masterLicenseRepository.query(`
    SELECT COUNT(*) AS licensecount FROM MasterOSKeyType`);
  }

  findOne(osKey: number) {
    return this.masterLicenseRepository.findOne({
      where: { category: category },
    });
  }

  update(id: number, updateMasterLicenseDto: UpdateMasterLicenseDto) {
    return `This action updates a #${id} masterLicense`;
  }

  remove(osKey: string) {
    return this.masterLicenseRepository.delete(osKey);
  }
}
