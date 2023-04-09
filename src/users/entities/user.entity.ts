import { Column, Entity } from 'typeorm';
import { Base } from '../../utils/base';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User extends Base {
  @ApiProperty({ example: 'aaa@mail.com', uniqueItems: true })
  @Column({ unique: true })
  email: string;
  @ApiProperty({ example: '123' })
  @Column()
  password: string;
}
