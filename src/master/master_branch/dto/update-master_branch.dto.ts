import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterBranchDto } from './create-master_branch.dto';

export class UpdateMasterBranchDto extends PartialType(CreateMasterBranchDto) {}
