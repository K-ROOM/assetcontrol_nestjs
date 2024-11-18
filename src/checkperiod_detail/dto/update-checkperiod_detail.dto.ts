import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckperiodDetailDto } from './create-checkperiod_detail.dto';

export class UpdateCheckperiodDetailDto extends PartialType(CreateCheckperiodDetailDto) {}
