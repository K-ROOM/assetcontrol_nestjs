import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CheckperiodService } from './checkperiod.service';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';
import { Checkperiod } from './entities/checkperiod.entity';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';

@UseGuards(JwtGuard)
@Controller('checkperiod')
export class CheckperiodController {
  constructor(private readonly checkperiodService: CheckperiodService) {}

  @Post()
  create(@Body() createCheckperiodDto: CreateCheckperiodDto) {
    return this.checkperiodService.create(createCheckperiodDto);
  }

  @Post('/transaction_history')
  createHistoryTransaction(@Body() data: any) {
    return this.checkperiodService.createHistoryTransaction(data);
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
