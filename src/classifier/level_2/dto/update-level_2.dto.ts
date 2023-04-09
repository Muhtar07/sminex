import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel2Dto } from './create-level_2.dto';

export class UpdateLevel2Dto extends PartialType(CreateLevel2Dto) {}
