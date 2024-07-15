import { Injectable } from '@nestjs/common';
import { CreateMasterBranchDto } from './dto/create-master_branch.dto';
import { UpdateMasterBranchDto } from './dto/update-master_branch.dto';
import { MasterBranch } from './entities/master_branch.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MasterBranchService {
  constructor(
    @InjectRepository(MasterBranch)
    private readonly masterBranchRepository: Repository<MasterBranch>,
  ) { }

  create(createMasterBranchDto: CreateMasterBranchDto) {
    return this.masterBranchRepository.save(createMasterBranchDto);
  }

  findAll() {
    return this.masterBranchRepository.find();
  }

  findAllSelectCount() {
    const entityManager = this.masterBranchRepository.manager
    return this.masterBranchRepository.query(`
    SELECT tblIPAddress_Status_1.BranchCode AS BranchCodeH, COUNT(tblIPAddress_Status_1.BranchCode) AS IPCount, tblMaster_Branch.BranchCode, tblMaster_Branch.Description,
    (SELECT COUNT(Status) AS Active FROM tblIPAddress_Status WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Active')) AS Active,
    (SELECT COUNT(Status) AS Empty FROM tblIPAddress_Status AS tblIPAddress_Status_2 WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Empty')) AS Empty
    FROM tblIPAddress_Status AS tblIPAddress_Status_1 INNER JOIN tblMaster_Branch ON tblIPAddress_Status_1.BranchCode = tblMaster_Branch.BranchCode
    GROUP BY tblIPAddress_Status_1.BranchCode, tblMaster_Branch.BranchCode, tblMaster_Branch.Description`);
  }

  findOne(id: number) {
    return `This action returns a #${id} masterBranch`;
  }

  update(id: number, updateMasterBranchDto: UpdateMasterBranchDto) {
    return `This action updates a #${id} masterBranch`;
  }

  remove(branchCode: string) {
    return this.masterBranchRepository.delete(branchCode);
  }
}
