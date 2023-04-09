import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { dataSourceOptions } from '../db/data-source';
import { ClassifierModule } from './classifier/classifier.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MulterModule.register({
      dest: './uploads',
    }),

    TypeOrmModule.forRoot(dataSourceOptions),

    ClassifierModule,

    AuthModule,
  ],
})
export class AppModule {}
