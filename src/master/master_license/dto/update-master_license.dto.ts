import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterLicenseDto } from './create-master_license.dto';

export class UpdateMasterLicenseDto extends PartialType(CreateMasterLicenseDto) {}
