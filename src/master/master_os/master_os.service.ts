import { Injectable } from '@nestjs/common';
import { CreateMasterODto } from './dto/create-master_o.dto';
import { UpdateMasterODto } from './dto/update-master_o.dto';
import { MasterOS } from './entities/master_os.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterOsService {
  constructor(
    @InjectRepository(MasterOS)
    private readonly masterOSRepository: Repository<MasterOS>,
  ) { }

  create(createMasterODto: CreateMasterODto) {
    return 'This action adds a new masterO';
  }

  findAll() {
    return this.masterOSRepository.find();
  }

  findAllCount() {
    const entityManager = this.masterOSRepository.manager
    return this.masterOSRepository.query(`
    SELECT COUNT(*) AS oscount FROM MasterOS`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterO`;
  }

  update(id: number, updateMasterODto: UpdateMasterODto) {
    return `This action updates a #${id} masterO`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterO`;
  }
}
