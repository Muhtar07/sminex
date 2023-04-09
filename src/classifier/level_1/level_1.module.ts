import { Module } from '@nestjs/common';
import { Level1Service } from './level_1.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level1 } from './entities/level_1.entity';

@Module({
  providers: [Level1Service],
  exports: [Level1Service],
  imports: [TypeOrmModule.forFeature([Level1])],
})
export class Level1Module {}
