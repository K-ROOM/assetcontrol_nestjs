import { Injectable } from '@nestjs/common';
import { CreateEwelinkDto } from './dto/create-ewelink.dto';
import { UpdateEwelinkDto } from './dto/update-ewelink.dto';

@Injectable()
export class EwelinkService {
  create(createEwelinkDto: CreateEwelinkDto) {
    return 'This action adds a new ewelink';
  }

  findAll() {
    return `This action returns all ewelink`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ewelink`;
  }

  update(id: number, updateEwelinkDto: UpdateEwelinkDto) {
    return `This action updates a #${id} ewelink`;
  }

  remove(id: number) {
    return `This action removes a #${id} ewelink`;
  }
}
