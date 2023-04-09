import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class Base {
  @ApiProperty({
    example: '1',
    uniqueItems: true,
    description: 'Индетефикатор',
  })
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty({
    example: '1',
    uniqueItems: true,
    description: 'Дата создания',
  })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @ApiProperty({
    example: '1',
    uniqueItems: true,
    description: 'Дата изменения',
  })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
