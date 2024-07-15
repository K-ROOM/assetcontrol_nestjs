import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterODto } from './create-master_o.dto';

export class UpdateMasterODto extends PartialType(CreateMasterODto) {}
