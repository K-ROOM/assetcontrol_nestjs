import { Injectable } from '@nestjs/common';
import { CreateMasterOskeyDto } from './dto/create-master_oskey.dto';
import { UpdateMasterOskeyDto } from './dto/update-master_oskey.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterOskey } from './entities/master_oskey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MasterOskeyService {
  constructor(
    @InjectRepository(MasterOskey)
    private readonly masterOsKeyRepository: Repository<MasterOskey>,
  ) { }

  create(createMasterOskeyDto: CreateMasterOskeyDto) {
    return this.masterOSKeyRepository.save(createMasterOskeyDto);
  }

  findAll() {
    return this.masterOSKeyRepository.find();
  }

  findWithOSLicenseType(osLicenseType: string) {
    return this.masterOSKeyRepository.find({
      select: ['osKey', 'osLicenseType', 'status'],
      where: {
        osLicenseType: osLicenseType,
      },
      order: {
        osKey: 'ASC'
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
