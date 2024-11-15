import { Injectable } from '@nestjs/common';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';

@Injectable()
export class CheckperiodService {
  create(createCheckperiodDto: CreateCheckperiodDto) {
    return this.masterBrandRepository.save(createCheckperiodDto);
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
