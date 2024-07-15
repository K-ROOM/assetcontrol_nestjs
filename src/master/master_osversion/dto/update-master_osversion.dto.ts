import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterOsversionDto } from './create-master_osversion.dto';

export class UpdateMasterOsversionDto extends PartialType(CreateMasterOsversionDto) {}
