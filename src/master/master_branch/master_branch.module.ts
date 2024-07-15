import { Module } from '@nestjs/common';
import { MasterBranchService } from './master_branch.service';
import { MasterBranchController } from './master_branch.controller';
import { MasterBranch } from './entities/master_branch.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MasterBranch])],
  controllers: [MasterBranchController],
  providers: [MasterBranchService]
})
export class MasterBranchModule {}
