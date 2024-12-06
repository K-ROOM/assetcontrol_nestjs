import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { IpHeaderService } from './ip_header.service';
import { CreateIpHeaderDto } from './dto/create-ip_header.dto';
import { UpdateIpHeaderDto } from './dto/update-ip_header.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';

@UseGuards(JwtGuard)
@Controller('ip')
export class IpHeaderController {
  constructor(private readonly ipHeaderService: IpHeaderService) {}

  @Post()
  create(@Body() createIpHeaderDto: CreateIpHeaderDto) {
    return this.ipHeaderService.create(createIpHeaderDto);
  }

  @Get()
  findAll() {
    return this.ipHeaderService.findAll();
  }

  @Get('/allasc')
  findAllWithASC() {
    return this.ipHeaderService.findAllWithASC();
  }

  @Patch('/:ip1/:ip2/:ip3/:ip4/:edp_No/:oip1/:oip2/:oip3/:oip4')
  update(@Param('ip1') ip1: number, @Param('ip2') ip2: number, @Param('ip3') ip3: number, @Param('ip4') ip4: number, @Param('edp_No') edp_No: string, @Param('oip1') oip1: number, @Param('oip2') oip2: number, @Param('oip3') oip3: number, @Param('oip4') oip4: number) {
    return this.ipHeaderService.update(ip1, ip2, ip3, ip4, edp_No);
  }

  @Get('/findbybranch')
  findAllSelectColWithBranchCode(@Query('branchCode') branchCode: string) {
    return this.ipHeaderService.findAllSelectColWithBranchCode(branchCode);
  }

  // @Get('/:edp_No')
  // findIPByEdpNo(@Param('edp_No') edp_No: string) {
  //   return this.ipHeaderService.findIPByEdpNo(edp_No);
  // }

  @Get('/:ip1/:ip2/:ip3/:ip4')
  findOne(@Param('ip1') ip1: number, @Param('ip2') ip2: number, @Param('ip3') ip3: number, @Param('ip4') ip4: number) {
    return this.ipHeaderService.findOne(ip1, ip2, ip3, ip4);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ipHeaderService.remove(+id);
  }

  @Get('/ipcount/all')
  findCountBranchCode() {
    return this.ipHeaderService.findCountBranchCode();
  }
}
