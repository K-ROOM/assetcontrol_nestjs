import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterCategoryDto } from './create-master_category.dto';

export class UpdateMasterCategoryDto extends PartialType(CreateMasterCategoryDto) {}
