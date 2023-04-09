import { PartialType } from '@nestjs/mapped-types';
import { CreateLevel1Dto } from './create-level_1.dto';

export class UpdateLevel1Dto extends PartialType(CreateLevel1Dto) {}
