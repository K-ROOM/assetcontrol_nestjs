import { Injectable } from '@nestjs/common';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';
import { Checkperiod } from './entities/checkperiod.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CheckperiodService {
  constructor(
    @InjectRepository(Checkperiod)
    private readonly checkPeriodRepository: Repository<Checkperiod>,
  ) { }

  create(createCheckperiodDto: CreateCheckperiodDto) {
    return this.checkPeriodRepository.save(createCheckperiodDto);
  }

  async findLatest(): Promise<Checkperiod> {
    return this.checkPeriodRepository.findOne({
      order: {
        workYear: 'DESC',
        halfName: 'DESC',
      },
    });
  }

  findAll() {
    return `This action returns all checkperiod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkperiod`;
  }

  update(id: number, updateCheckperiodDto: UpdateCheckperiodDto) {
    return `This action updates a #${id} checkperiod`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkperiod`;
  }
}
