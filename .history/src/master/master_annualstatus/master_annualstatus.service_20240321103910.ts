import { Injectable } from '@nestjs/common';
import { CreateMasterAnnualstatusDto } from './dto/create-master_annualstatus.dto';
import { UpdateMasterAnnualstatusDto } from './dto/update-master_annualstatus.dto';

@Injectable()
export class MasterAnnualstatusService {
  create(createMasterAnnualstatusDto: CreateMasterAnnualstatusDto) {
    return 'This action adds a new masterAnnualstatus';
  }

  findAll() {
    return `This action returns all masterAnnualstatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterAnnualstatus`;
  }

  update(id: number, updateMasterAnnualstatusDto: UpdateMasterAnnualstatusDto) {
    return `This action updates a #${id} masterAnnualstatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterAnnualstatus`;
  }
}
