import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MasterBranchService } from './master_branch.service';
import { CreateMasterBranchDto } from './dto/create-master_branch.dto';
import { UpdateMasterBranchDto } from './dto/update-master_branch.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';

@UseGuards(JwtGuard)
@Controller('masterbranch')
export class MasterBranchController {
  constructor(private readonly masterBranchService: MasterBranchService) {}

  @Post()
  create(@Body() createMasterBranchDto: CreateMasterBranchDto) {
    return this.masterBranchService.create(createMasterBranchDto);
  }

  @Get()
  findAll() {
    return this.masterBranchService.findAll();
  }

  @Get('/countall')
  findAllSelectCount() {
    return this.masterBranchService.findAllSelectCount();
  }

  @Get('/count')
  findAllCount() {
    return this.masterBranchService.findAllCount();
  }

  @Get(':branch')
  findOne(@Param('id') id: string) {
    return this.masterBranchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterBranchDto: UpdateMasterBranchDto) {
    return this.masterBranchService.update(+id, updateMasterBranchDto);
  }

  @Delete(':branchCode')
  remove(@Param('branchCode') branchCode: string) {
    return this.masterBranchService.remove(branchCode);
  }
}
