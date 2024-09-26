import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterOskeyDto } from './create-master_oskey.dto';

export class UpdateMasterOskeyDto extends PartialType(CreateMasterOskeyDto) {}
