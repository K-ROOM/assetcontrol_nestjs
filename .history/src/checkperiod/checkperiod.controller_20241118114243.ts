import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckperiodService } from './checkperiod.service';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';
import { Checkperiod } from './entities/checkperiod.entity';

@Controller('checkperiod')
export class CheckperiodController {
  constructor(private readonly checkperiodService: CheckperiodService) {}

  @Post()
  create(@Body() createCheckperiodDto: CreateCheckperiodDto) {
    return this.checkperiodService.create(createCheckperiodDto);
  }

  @Post('/transaction_step2/:recruitmentID')
  @UseGuards(JwtGuard)
  updateRelationshipAndAddressTransaction(@Param('recruitmentID') recruitmentID: string, @Body() data: any) {
    return this.rmsHeaderService.updateRelationshipAndAddressTransaction(recruitmentID, data);
  }

  @Get()
  findAll() {
    return this.checkperiodService.findAll();
  }

  @Get('latest')
  async findLatest(): Promise<Checkperiod> {
    return this.checkperiodService.findLatest();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkperiodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCheckperiodDto: UpdateCheckperiodDto) {
    return this.checkperiodService.update(+id, updateCheckperiodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkperiodService.remove(+id);
  }
}
