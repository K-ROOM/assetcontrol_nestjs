import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetHeaderDto } from './create-asset_header.dto';


export class UpdateAssetHeaderDto extends PartialType(CreateAssetHeaderDto) {}
