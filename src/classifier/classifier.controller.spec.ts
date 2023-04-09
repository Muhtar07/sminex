import { Test, TestingModule } from '@nestjs/testing';
import { ClassifierController } from './classifier.controller';
import { ClassifierService } from './classifier.service';

describe('ClassifierController', () => {
  let controller: ClassifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassifierController],
      providers: [ClassifierService],
    }).compile();

    controller = module.get<ClassifierController>(ClassifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
