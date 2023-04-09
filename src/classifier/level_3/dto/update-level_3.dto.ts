import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel3Dto } from './create-level_3.dto';

export class UpdateLevel3Dto extends PartialType(CreateLevel3Dto) {}
