import { PartialType } from '@nestjs/mapped-types';
import { CreateIpHeaderDto } from './create-ip_header.dto';

export class UpdateIpHeaderDto extends PartialType(CreateIpHeaderDto) {}
