import { Test, TestingModule } from '@nestjs/testing';
import { Level5Service } from './level_5.service';

describe('Level5Service', () => {
  let service: Level5Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Level5Service],
    }).compile();

    service = module.get<Level5Service>(Level5Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
