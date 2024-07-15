import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterBrandDto } from './create-master_brand.dto';

export class UpdateMasterBrandDto extends PartialType(CreateMasterBrandDto) {}
