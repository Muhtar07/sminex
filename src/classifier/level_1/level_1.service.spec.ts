import { Test, TestingModule } from '@nestjs/testing';
import { Level1Service } from './level_1.service';

describe('Level1Service', () => {
  let service: Level1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Level1Service],
    }).compile();

    service = module.get<Level1Service>(Level1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
