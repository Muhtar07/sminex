import { Test, TestingModule } from '@nestjs/testing';
import { Level4Service } from './level_4.service';

describe('Level4Service', () => {
  let service: Level4Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Level4Service],
    }).compile();

    service = module.get<Level4Service>(Level4Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
