import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterOslicensetypeDto } from './create-master_oslicensetype.dto';

export class UpdateMasterOslicensetypeDto extends PartialType(CreateMasterOslicensetypeDto) {}
