import { Injectable } from '@nestjs/common';
import { CreateMasterModelDto } from './dto/create-master_model.dto';
import { UpdateMasterModelDto } from './dto/update-master_model.dto';
import { MasterModel } from './entities/master_model.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MasterModelService {
  constructor(
    @InjectRepository(MasterModel)
    private readonly masterModelRepository: Repository<MasterModel>,
  ) { }

  create(createMasterModelDto: CreateMasterModelDto) {
    return this.masterModelRepository.save(createMasterModelDto);
  }

  findAll() {
    return this.masterModelRepository.find();
  }

  findAllSelectCount() {
    const entityManager = this.masterModelRepository.manager
    return this.masterModelRepository.query(`
    SELECT COUNT(tblIPAddress_Status.BranchCode) AS ipCount, tblMaster_Branch.BranchCode AS branchCode, tblMaster_Branch.Description AS description,
    (SELECT COUNT(Status) AS active FROM tblIPAddress_Status WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Active')) AS active,
    (SELECT COUNT(Status) AS empty FROM tblIPAddress_Status AS tblIPAddress_Status_2 WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Empty')) AS empty
    FROM tblIPAddress_Status INNER JOIN tblMaster_Branch ON tblIPAddress_Status.BranchCode = tblMaster_Branch.BranchCode
    GROUP BY tblIPAddress_Status.BranchCode, tblMaster_Branch.BranchCode, tblMaster_Branch.Description`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterModel`;
  }

  update(id: number, updateMasterModelDto: UpdateMasterModelDto) {
    return `This action updates a #${id} masterModel`;
  }

  remove(model: string) {
    return this.masterModelRepository.delete(model);
  }
}
