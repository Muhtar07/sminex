import { Test, TestingModule } from '@nestjs/testing';
import { Level1Controller } from './level_1.controller';
import { Level1Service } from './level_1.service';

describe('Level1Controller', () => {
  let controller: Level1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Level1Controller],
      providers: [Level1Service],
    }).compile();

    controller = module.get<Level1Controller>(Level1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
