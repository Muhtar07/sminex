import { Injectable } from '@nestjs/common';
import { CreateLevel5Dto } from './dto/create-level_5.dto';
import { UpdateLevel5Dto } from './dto/update-level_5.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level5 } from './entities/level_5.entity';

@Injectable()
export class Level5Service {
  constructor(
    @InjectRepository(Level5)
    private levelTwoRepository: Repository<Level5[]>,
  ) {}
  async create(createLevel5Dto: CreateLevel5Dto[]) {
    // console.log(createLevel2Dto);
    return await this.levelTwoRepository.save(createLevel5Dto);
  }

  findAll() {
    return `This action returns all level5`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level5`;
  }

  update(id: number, updateLevel5Dto: UpdateLevel5Dto) {
    return `This action updates a #${id} level5`;
  }

  remove(id: number) {
    return `This action removes a #${id} level5`;
  }
}
