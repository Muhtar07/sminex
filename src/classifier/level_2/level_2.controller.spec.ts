import { Test, TestingModule } from '@nestjs/testing';
import { Level2Controller } from './level_2.controller';
import { Level2Service } from './level_2.service';

describe('Level2Controller', () => {
  let controller: Level2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Level2Controller],
      providers: [Level2Service],
    }).compile();

    controller = module.get<Level2Controller>(Level2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
