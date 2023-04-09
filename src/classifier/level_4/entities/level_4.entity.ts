import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Level3 } from '../../level_3/entities/level_3.entity';
import { Level5 } from '../../level_5/entities/level_5.entity';

@Entity()
export class Level4 extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column()
  code: string;
  @ApiProperty({ example: '123' })
  @Column()
  description: string;
  @Column('simple-array', { name: 'parent_path' })
  parentPath: string[];
  @ManyToOne(() => Level3, (level3) => level3.id)
  level3: Level3;
  @OneToMany(() => Level5, (level5) => level5.level4)
  @JoinColumn()
  level5: Level5[];
}
