import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel5Dto } from './create-level_5.dto';

export class UpdateLevel5Dto extends PartialType(CreateLevel5Dto) {}
