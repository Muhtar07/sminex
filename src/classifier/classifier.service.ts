import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Classifier } from './entities/classifier.entity';
import { ILike, Repository } from 'typeorm';
import { Level1Service } from './level_1/level_1.service';
import { Level2Service } from './level_2/level_2.service';
import { Level4Service } from './level_4/level_4.service';
import { Level5Service } from './level_5/level_5.service';
import { Level3Service } from './level_3/level_3.service';
import { parserSvg } from './common/parserSvg';
import { validateDocument } from './common/validationDocument';
import { relationClassifier } from './common/relationClassifier';
import { getClassifierByCode } from './common/getClassifierByCode';

@Injectable()
export class ClassifierService {
  constructor(
    @InjectRepository(Classifier)
    private classifierRepository: Repository<Classifier>, // file: FilesService,
    private levelOneService: Level1Service,
    private levelTwoService: Level2Service,
    private levelThreeService: Level3Service,
    private levelFourService: Level4Service,
    private levelFiveService: Level5Service,
  ) {}
  async create(file: Express.Multer.File) {
    const createdClassifier = await this.classifierRepository.save({
      fileName: file.filename,
      originalName: file.originalname,
    });

    if (createdClassifier instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const parseSvg = await parserSvg(file);

    const { levelOne, levelTwo, levelThree, levelFour, levelFive } =
      validateDocument(parseSvg.data);

    const levelOneToClass = levelOne.reduce((acc, value: any) => {
      if (value.level === '1') {
        acc.push({ ...value, classifier: createdClassifier });
      }
      return acc;
    }, []);

    const createLevelOne = await this.levelOneService.create(levelOneToClass);
    if (createLevelOne instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const levelTwoToLevelOne = relationClassifier(createLevelOne, levelTwo);

    const createLevelTwo = await this.levelTwoService.create(
      levelTwoToLevelOne,
    );
    if (createLevelTwo instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const levelThreeToLevelTwo = relationClassifier(createLevelTwo, levelThree);

    const createLevelThree = await this.levelThreeService.create(
      levelThreeToLevelTwo,
    );

    if (createLevelThree instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    const levelFourToLevelThree = relationClassifier(
      createLevelThree,
      levelFour,
    );

    const createLevelFour = await this.levelFourService.create(
      levelFourToLevelThree,
    );

    if (createLevelFour instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const levelFiveToLevelFour = relationClassifier(createLevelFour, levelFive);

    const createLevelFive = await this.levelFiveService.create(
      levelFiveToLevelFour,
    );

    if (createLevelFive instanceof Error) {
      throw new HttpException(
        'Ошибка записи в базе данных',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return createdClassifier;
  }

  async findAll(id?: string, code?: string) {
    const classifier = await this.classifierRepository.find({
      relations: id
        ? {
            level1: {
              level2: {
                level3: {
                  level4: {
                    level5: true,
                  },
                },
              },
            },
          }
        : {},
      where: {
        id: id && +id,
        level1: code && {
          level2: {
            level3: {
              level4: {
                level5: {
                  code: ILike(
                    code.length !== 8 ? `${code}%` : `${code.slice(0, -2)}%`,
                  ),
                },
              },
            },
          },
        },
      },
    });

    if (!classifier.length) {
      throw new HttpException(
        'Классификатора не существует с таким кодом',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (code) {
      return getClassifierByCode(classifier[0].level1, code);
    }

    return classifier;
  }
}
