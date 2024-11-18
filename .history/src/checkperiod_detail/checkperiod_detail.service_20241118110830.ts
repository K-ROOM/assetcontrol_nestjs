import { Injectable } from '@nestjs/common';
import { CreateCheckperiodDetailDto } from './dto/create-checkperiod_detail.dto';
import { UpdateCheckperiodDetailDto } from './dto/update-checkperiod_detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CheckperiodDetail } from './entities/checkperiod_detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CheckperiodDetailService {
  constructor(
    @InjectRepository(CheckperiodDetail)
    private readonly rmsInternshipRepository: Repository<CheckperiodDetail>,
  ) {}
  
  create(createCheckperiodDetailDto: CreateCheckperiodDetailDto) {
    return 'This action adds a new checkperiodDetail';
  }

  findAll() {
    return `This action returns all checkperiodDetail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} checkperiodDetail`;
  }

  update(id: number, updateCheckperiodDetailDto: UpdateCheckperiodDetailDto) {
    return `This action updates a #${id} checkperiodDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkperiodDetail`;
  }
}
