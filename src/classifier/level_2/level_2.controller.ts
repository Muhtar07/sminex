import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Level2Service } from './level_2.service';
import { CreateLevel2Dto } from './dto/create-level_2.dto';
import { UpdateLevel2Dto } from './dto/update-level_2.dto';

@Controller('level-2')
export class Level2Controller {
  constructor(private readonly level2Service: Level2Service) {}

  @Post()
  create(@Body() createLevel2Dto: CreateLevel2Dto) {
    // return this.level2Service.create(createLevel2Dto);
  }

  @Get()
  findAll() {
    return this.level2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.level2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLevel2Dto: UpdateLevel2Dto) {
    return this.level2Service.update(+id, updateLevel2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.level2Service.remove(+id);
  }
}
