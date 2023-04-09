import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Level1 } from '../../level_1/entities/level_1.entity';
import { Level3 } from '../../level_3/entities/level_3.entity';

@Entity()
export class Level2 extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column()
  code: string;
  @ApiProperty({ example: '123' })
  @Column()
  description: string;
  @Column('simple-array', { name: 'parent_path' })
  parentPath: string[];
  @ManyToOne(() => Level1, (level1) => level1.id)
  level1: Level1;
  @OneToMany(() => Level3, (level3) => level3.level2)
  @JoinColumn()
  level3: Level3[];
}
