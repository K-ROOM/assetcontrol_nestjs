import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterOfficeversionDto } from './create-master_officeversion.dto';

export class UpdateMasterOfficeversionDto extends PartialType(CreateMasterOfficeversionDto) {}
