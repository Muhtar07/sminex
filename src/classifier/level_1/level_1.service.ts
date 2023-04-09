import { Injectable } from '@nestjs/common';
import { CreateLevel1Dto } from './dto/create-level_1.dto';
import { UpdateLevel1Dto } from './dto/update-level_1.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Level1 } from './entities/level_1.entity';
import { Repository } from 'typeorm';

@Injectable()
export class Level1Service {
  constructor(
    @InjectRepository(Level1)
    private levelOneRepository: Repository<Level1[]>,
  ) {}
  async create(createLevel1Dto: CreateLevel1Dto[]) {
    return await this.levelOneRepository.save(createLevel1Dto);
  }

  findAll() {
    return `This action returns all level1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level1`;
  }

  update(id: number, updateLevel1Dto: UpdateLevel1Dto) {
    return `This action updates a #${id} level1`;
  }

  remove(id: number) {
    return `This action removes a #${id} level1`;
  }
}
