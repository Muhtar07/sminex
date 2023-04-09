import { Test, TestingModule } from '@nestjs/testing';
import { ClassifierService } from './classifier.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Classifier } from './entities/classifier.entity';
import { Level1Service } from './level_1/level_1.service';
import { Level2Service } from './level_2/level_2.service';
import { Level5Service } from './level_5/level_5.service';
import { Level4Service } from './level_4/level_4.service';
import { Level3Service } from './level_3/level_3.service';

const mockClassifier = [
  {
    id: 1,
    fileName: 'Uniformat_2010_RUS.csv',
    originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
    createdAt: '2023-04-10 03:24:38.841025',
    updatedAt: '2023-04-10 03:24:38.841025',
  },
  {
    id: 2,
    fileName: 'Uniformat_2010_RUS.csv',
    originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
    createdAt: '2023-04-11 03:24:38.841025',
    updatedAt: '2023-04-11 03:24:38.841025',
  },
  {
    id: 3,
    fileName: 'Uniformat_2010_RUS.csv',
    originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
    createdAt: '2023-04-12 03:24:38.841025',
    updatedAt: '2023-04-12 03:24:38.841025',
  },
];

const mockLevel = [
  {
    id: 1,
    fileName: 'Uniformat_2010_RUS.csv',
    originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
    createdAt: '2023-04-10 03:24:38.841025',
    updatedAt: '2023-04-10 03:24:38.841025',
    level1: [
      {
        id: 1,
        fileName: 'Uniformat_2010_RUS.csv',
        originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
        createdAt: '2023-04-10 03:24:38.841025',
        updatedAt: '2023-04-10 03:24:38.841025',
        code: 'A',
        description: 'Стандартные фундаменты',
        parentPath: ['A'],
        level2: [
          {
            id: 1,
            fileName: 'Uniformat_2010_RUS.csv',
            originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
            createdAt: '2023-04-10 03:24:38.841025',
            updatedAt: '2023-04-10 03:24:38.841025',
            code: 'A10',
            description: 'Стандартные фундаменты',
            parentPath: ['A', 'A10'],
            level3: [
              {
                id: 1,
                fileName: 'Uniformat_2010_RUS.csv',
                originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
                createdAt: '2023-04-10 03:24:38.841025',
                updatedAt: '2023-04-10 03:24:38.841025',
                code: 'A1010',
                description: 'Стандартные фундаменты',
                parentPath: ['A', 'A10', 'A1010'],
                level4: [
                  {
                    id: 1,
                    fileName: 'Uniformat_2010_RUS.csv',
                    originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
                    createdAt: '2023-04-10 03:24:38.841025',
                    updatedAt: '2023-04-10 03:24:38.841025',
                    code: 'A1010100',
                    description: 'Стандартные фундаменты',
                    parentPath: ['A', 'A10', 'A1010', 'A1010100'],
                    level5: [
                      {
                        id: 1,
                        fileName: 'Uniformat_2010_RUS.csv',
                        originalName: '94985828-11ff-4d6b-9ec3-56168944599c',
                        createdAt: '2023-04-10 03:24:38.841025',
                        updatedAt: '2023-04-10 03:24:38.841025',
                        code: 'A1010110',
                        description: 'Стандартные фундаменты',
                        parentPath: [
                          'A',
                          'A10',
                          'A1010',
                          'A1010100',
                          'A1010110',
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

describe('ClassifierService', () => {
  const classifierRepositoryMock = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((file) => {
      return {
        fileName: file.fileName,
        originalName: file.originalName,
      };
    }),
    find: jest.fn().mockImplementation((ids: number, code: string) => {
      if (!ids) {
        return Promise.resolve(mockClassifier);
      }

      if (ids && !code) {
        return Promise.resolve([mockClassifier.find(({ id }) => id === +id)]);
      }

      return Promise.resolve(mockLevel);
    }),
  };
  const levelsServiceMock = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest
      .fn()
      .mockImplementation((user) =>
        Promise.resolve({ id: Date.now(), ...user }),
      ),
    findOneBy: jest.fn().mockImplementation((email) => {
      return Promise.resolve({
        id: 1,
        email: 'aaa@aaa.com',
        password: 'sdvjnfjlvjncvbsdufbvfdsjvns',
      });
    }),
  };

  let classifierService: ClassifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClassifierService,
        {
          provide: getRepositoryToken(Classifier),
          useValue: classifierRepositoryMock,
        },
        {
          provide: Level1Service,
          useValue: levelsServiceMock,
        },
        {
          provide: Level2Service,
          useValue: levelsServiceMock,
        },
        {
          provide: Level3Service,
          useValue: levelsServiceMock,
        },
        {
          provide: Level4Service,
          useValue: levelsServiceMock,
        },
        {
          provide: Level5Service,
          useValue: levelsServiceMock,
        },
      ],
    }).compile();

    classifierService = module.get<ClassifierService>(ClassifierService);
  });

  it('should be defined', () => {
    expect(classifierService).toBeDefined();
  });
  it('upload success', async () => {
    expect(
      await classifierService.create({
        filename: 'dcdjcndjncjdn',
        originalname: 'test.csv',
        path: '/Users/muhtar/Desktop/sminex/src/classifier/test/test.csv',
      } as Express.Multer.File),
    ).toEqual({ fileName: 'dcdjcndjncjdn', originalName: 'test.csv' });
  });

  it('find all success no argument', async () => {
    expect(await classifierService.findAll()).toEqual(mockClassifier);
  });

  it('find all success to id', async () => {
    expect(await classifierService.findAll('1')).toEqual([mockClassifier[0]]);
  });

  it('find all success to id and code', async () => {
    expect(await classifierService.findAll('1', 'A1010')).toEqual(
      mockLevel[0].level1[0].level2[0].level3,
    );
  });
});
