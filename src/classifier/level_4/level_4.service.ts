import { Injectable } from '@nestjs/common';
import { CreateLevel4Dto } from './dto/create-level_4.dto';
import { UpdateLevel4Dto } from './dto/update-level_4.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level4 } from './entities/level_4.entity';

@Injectable()
export class Level4Service {
  constructor(
    @InjectRepository(Level4)
    private levelFourRepository: Repository<Level4[]>,
  ) {}
  async create(createLevel4Dto: CreateLevel4Dto[]) {
    return await this.levelFourRepository.save(createLevel4Dto);
  }

  findAll() {
    return `This action returns all level4`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level4`;
  }

  update(id: number, updateLevel4Dto: UpdateLevel4Dto) {
    return `This action updates a #${id} level4`;
  }

  remove(id: number) {
    return `This action removes a #${id} level4`;
  }
}
