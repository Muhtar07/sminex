import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Base } from '../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Level1 } from '../level_1/entities/level_1.entity';

@Entity()
export class Classifier extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column({ name: 'original_name' })
  originalName: string;
  @ApiProperty({ example: '123' })
  @Column({ name: 'file_name' })
  fileName: string;
  @OneToMany(() => Level1, (level1) => level1.classifier)
  @JoinColumn()
  level1: Level1[];
}
