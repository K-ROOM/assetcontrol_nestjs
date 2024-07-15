import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterSubcategoryDto } from './create-master_subcategory.dto';

export class UpdateMasterSubcategoryDto extends PartialType(CreateMasterSubcategoryDto) {}
