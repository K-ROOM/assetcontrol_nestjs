import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterStatusDto } from './create-master_status.dto';

export class UpdateMasterStatusDto extends PartialType(CreateMasterStatusDto) {}
