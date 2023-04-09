import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level5Service } from './level_5.service';
import { Level5 } from './entities/level_5.entity';

@Module({
  providers: [Level5Service],
  exports: [Level5Service],
  imports: [TypeOrmModule.forFeature([Level5])],
})
export class Level5Module {}
