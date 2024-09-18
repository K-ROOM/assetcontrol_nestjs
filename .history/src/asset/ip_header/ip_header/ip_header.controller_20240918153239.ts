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

  @Patch('/:ip1/:ip2/:ip3/:ip4/:edp_No')
  update(@Param('ip1') ip1: number, @Param('ip2') ip2: number, @Param('ip3') ip3: number, @Param('ip4') ip4: number, @Param('edp_No') edp_No: string) {
    return this.ipHeaderService.update(ip1, ip2, ip3, ip4, edp_No);
  }

  @Get('/findbybranch')
  findAllSelecColWithBranchCode(@Query('branchCode') branchCode: string) {
    return this.ipHeaderService.findAllSelecColWithBranchCode(branchCode);
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
