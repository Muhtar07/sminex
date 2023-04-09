import { Module } from '@nestjs/common';
import { Level4Service } from './level_4.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level4 } from './entities/level_4.entity';

@Module({
  providers: [Level4Service],
  exports: [Level4Service],
  imports: [TypeOrmModule.forFeature([Level4])],
})
export class Level4Module {}
