import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterModelDto } from './create-master_model.dto';

export class UpdateMasterModelDto extends PartialType(CreateMasterModelDto) {}
