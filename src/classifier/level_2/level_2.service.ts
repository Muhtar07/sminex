import { Injectable } from '@nestjs/common';
import { CreateLevel2Dto } from './dto/create-level_2.dto';
import { UpdateLevel2Dto } from './dto/update-level_2.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level2 } from './entities/level_2.entity';

@Injectable()
export class Level2Service {
  constructor(
    @InjectRepository(Level2)
    private levelTwoRepository: Repository<Level2[]>,
  ) {}
  async create(createLevel2Dto: CreateLevel2Dto[]) {
    // console.log(createLevel2Dto);
    return await this.levelTwoRepository.save(createLevel2Dto);
  }

  findAll() {
    return `This action returns all level2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level2`;
  }

  update(id: number, updateLevel2Dto: UpdateLevel2Dto) {
    return `This action updates a #${id} level2`;
  }

  remove(id: number) {
    return `This action removes a #${id} level2`;
  }
}
