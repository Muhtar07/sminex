import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level2Service } from './level_2.service';
import { Level2 } from './entities/level_2.entity';

@Module({
  providers: [Level2Service],
  exports: [Level2Service],
  imports: [TypeOrmModule.forFeature([Level2])],
})
export class Level2Module {}
