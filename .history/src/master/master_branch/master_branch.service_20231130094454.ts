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
    SELECT COUNT(tblIPAddress_Status.BranchCode) AS ipCount, tblMaster_Branch.BranchCode AS branchCode, tblMaster_Branch.Description AS description,
    (SELECT COUNT(Status) AS active FROM tblIPAddress_Status WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Active')) AS active,
    (SELECT COUNT(Status) AS empty FROM tblIPAddress_Status AS tblIPAddress_Status_2 WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Empty')) AS empty
    FROM tblIPAddress_Status INNER JOIN tblMaster_Branch ON tblIPAddress_Status.BranchCode = tblMaster_Branch.BranchCode
    GROUP BY tblIPAddress_Status.BranchCode, tblMaster_Branch.BranchCode, tblMaster_Branch.Description`);
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
