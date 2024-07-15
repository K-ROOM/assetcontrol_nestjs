import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetSpareDto } from './create-asset_spare.dto';

export class UpdateAssetSpareDto extends PartialType(CreateAssetSpareDto) {}
