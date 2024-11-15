import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckperiodDto } from './create-checkperiod.dto';

export class UpdateCheckperiodDto extends PartialType(CreateCheckperiodDto) {}
