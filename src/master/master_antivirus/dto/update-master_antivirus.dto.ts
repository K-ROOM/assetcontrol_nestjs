import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterAntivirusDto } from './create-master_antivirus.dto';

export class UpdateMasterAntivirusDto extends PartialType(CreateMasterAntivirusDto) {}
