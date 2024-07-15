import { Injectable } from '@nestjs/common';
import { CreateMasterStatusDto } from './dto/create-master_status.dto';
import { UpdateMasterStatusDto } from './dto/update-master_status.dto';
import { MasterStatus } from './entities/master_status.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterStatusService {
  constructor(
    @InjectRepository(MasterStatus)
    private readonly masterStatusRepository: Repository<MasterStatus>,
  ) { }

  create(createMasterStatusDto: CreateMasterStatusDto) {
    return 'This action adds a new masterStatus';
  }

  findAll() {
    return this.masterStatusRepository.find({
      select: ['status_Process'],
      where: { 'annualCheckStatus': 'WAIT' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} masterStatus`;
  }

  update(id: number, updateMasterStatusDto: UpdateMasterStatusDto) {
    return `This action updates a #${id} masterStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterStatus`;
  }
}
