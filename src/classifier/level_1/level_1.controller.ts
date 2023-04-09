import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Level1Service } from './level_1.service';
import { CreateLevel1Dto } from './dto/create-level_1.dto';
import { UpdateLevel1Dto } from './dto/update-level_1.dto';

@Controller('level-1')
export class Level1Controller {
  constructor(private readonly level1Service: Level1Service) {}

  @Post()
  create(@Body() createLevel1Dto: CreateLevel1Dto) {
    // return this.level1Service.create();
  }

  @Get()
  findAll() {
    return this.level1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.level1Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevel1Dto: UpdateLevel1Dto) {
    return this.level1Service.update(+id, updateLevel1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.level1Service.remove(+id);
  }
}
