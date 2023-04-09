import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../../../utils/base';
import { ApiProperty } from '@nestjs/swagger';
import { Classifier } from '../../entities/classifier.entity';
import { Level2 } from '../../level_2/entities/level_2.entity';

@Entity()
export class Level1 extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column()
  code: string;
  @ApiProperty({ example: '123' })
  @Column()
  description: string;
  @Column('simple-array', { name: 'parent_path' })
  parentPath: string[];
  @ManyToOne(() => Classifier, (classifier) => classifier.id)
  classifier: Classifier;
  @OneToMany(() => Level2, (level2) => level2.level1)
  @JoinColumn()
  level2: Level2[];
}
