import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Level3Service } from './level_3.service';
import { Level3 } from './entities/level_3.entity';

@Module({
  providers: [Level3Service],
  exports: [Level3Service],
  imports: [TypeOrmModule.forFeature([Level3])],
})
export class Level3Module {}
