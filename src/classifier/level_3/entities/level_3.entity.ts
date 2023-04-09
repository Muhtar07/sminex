import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Level2 } from '../../level_2/entities/level_2.entity';
import { Level4 } from '../../level_4/entities/level_4.entity';

@Entity()
export class Level3 extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column()
  code: string;
  @ApiProperty({ example: '123' })
  @Column()
  description: string;
  @Column('simple-array', { name: 'parent_path' })
  parentPath: string[];
  @ManyToOne(() => Level2, (level2) => level2.id)
  level2: Level2;
  @OneToMany(() => Level4, (level4) => level4.level3)
  @JoinColumn()
  level4: Level4[];
}
