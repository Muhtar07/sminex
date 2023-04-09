import { Module } from '@nestjs/common';
import { ClassifierService } from './classifier.service';
import { ClassifierController } from './classifier.controller';
import { Level1Module } from './level_1/level_1.module';
import { Level2Module } from './level_2/level_2.module';
import { Level3Module } from './level_3/level_3.module';
import { Level4Module } from './level_4/level_4.module';
import { Level5Module } from './level_5/level_5.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classifier } from './entities/classifier.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ClassifierController],
  providers: [ClassifierService],
  imports: [
    TypeOrmModule.forFeature([Classifier]),
    AuthModule,
    Level1Module,
    Level2Module,
    Level3Module,
    Level4Module,
    Level5Module,
  ],
})
export class ClassifierModule {}
