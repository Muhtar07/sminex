import { Injectable } from '@nestjs/common';
import { CreateLevel3Dto } from './dto/create-level_3.dto';
import { UpdateLevel3Dto } from './dto/update-level_3.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Level4 } from '../level_4/entities/level_4.entity';
import { Repository } from 'typeorm';
import { CreateLevel4Dto } from '../level_4/dto/create-level_4.dto';
import { Level3 } from './entities/level_3.entity';

@Injectable()
export class Level3Service {
  constructor(
    @InjectRepository(Level3)
    private levelFourRepository: Repository<Level3[]>,
  ) {}
  async create(createLevel3Dto: CreateLevel3Dto[]) {
    // console.log(createLevel2Dto);
    return await this.levelFourRepository.save(createLevel3Dto);
  }

  findAll() {
    return `This action returns all level3`;
  }

  findOne(id: number) {
    return `This action returns a #${id} level3`;
  }

  update(id: number, updateLevel3Dto: UpdateLevel3Dto) {
    return `This action updates a #${id} level3`;
  }

  remove(id: number) {
    return `This action removes a #${id} level3`;
  }
}
