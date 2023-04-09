// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { Level5Service } from './level_5.service';
// import { CreateLevel5Dto } from './dto/create-level_5.dto';
// import { UpdateLevel5Dto } from './dto/update-level_5.dto';
//
// @Controller('level-5')
// export class Level5Controller {
//   constructor(private readonly level5Service: Level5Service) {}
//
//   @Post()
//   create(@Body() createLevel5Dto: CreateLevel5Dto) {
//     return this.level5Service.create();
//   }
//
//   @Get()
//   findAll() {
//     return this.level5Service.findAll();
//   }
//
//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.level5Service.findOne(+id);
//   }
//
//   @Patch(':id')
//   update(@Param('id') id: string, @Body() updateLevel5Dto: UpdateLevel5Dto) {
//     return this.level5Service.update(+id, updateLevel5Dto);
//   }
//
//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.level5Service.remove(+id);
//   }
// }
