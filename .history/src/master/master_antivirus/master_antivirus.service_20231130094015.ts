import { Injectable } from '@nestjs/common';
import { CreateMasterAntivirusDto } from './dto/create-master_antivirus.dto';
import { UpdateMasterAntivirusDto } from './dto/update-master_antivirus.dto';
import { MasterAntivirus } from './entities/master_antivirus.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterAntivirusService {
  constructor(
    @InjectRepository(MasterAntivirus)
    private readonly masterAntivirusRepository: Repository<MasterAntivirus>,
  ) { }

  create(createMasterAntivirusDto: CreateMasterAntivirusDto) {
    return this.masterAntivirusRepository.save(createMasterAntivirusDto);
  }

  findAllSelect() {
    return this.masterAntivirusRepository.find({
      where: { 'status': true },
    });
  }

  findAll() {
    return this.masterAntivirusRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterAntivirusRepository.manager
    return this.masterAntivirusRepository.query(`
    SELECT COUNT(*) AS antiviruscount FROM tblMaster_Model`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterAntivirus`;
  }

  update(id: number, updateMasterAntivirusDto: UpdateMasterAntivirusDto) {
    return `This action updates a #${id} masterAntivirus`;
  }

  remove(antivirusVersion: string) {
    return this.masterAntivirusRepository.delete(antivirusVersion);
  }
}
