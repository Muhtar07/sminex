import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel4Dto } from './create-level_4.dto';

export class UpdateLevel4Dto extends PartialType(CreateLevel4Dto) {}
