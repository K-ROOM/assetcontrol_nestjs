import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterAnnualstatusDto } from './create-master_annualstatus.dto';

export class UpdateMasterAnnualstatusDto extends PartialType(CreateMasterAnnualstatusDto) {}
