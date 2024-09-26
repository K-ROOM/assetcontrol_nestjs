import { Injectable } from '@nestjs/common';
import { CreateMasterOskeyDto } from './dto/create-master_oskey.dto';
import { UpdateMasterOskeyDto } from './dto/update-master_oskey.dto';

@Injectable()
export class MasterOskeyService {
  create(createMasterOskeyDto: CreateMasterOskeyDto) {
    return 'This action adds a new masterOskey';
  }

  findAll() {
    return `This action returns all masterOskey`;
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
