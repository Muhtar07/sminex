import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Level4 } from '../../level_4/entities/level_4.entity';

@Entity()
export class Level5 extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column()
  code: string;
  @ApiProperty({ example: '123' })
  @Column()
  description: string;
  @Column('simple-array', { name: 'parent_path' })
  parentPath: string[];
  @ManyToOne(() => Level4, (level4) => level4.id)
  level4: Level4;
}
