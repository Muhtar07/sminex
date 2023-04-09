import { Classifier } from '../entities/classifier.entity';
import { Level1 } from '../level_1/entities/level_1.entity';

interface IDescriptionClassifier {
  code: string;
  description: string;
  level: string;
}

export class Level {
  code: string;
  description: string;
  level: string;
  parentPath: string[];
  constructor(model) {
    this.code = model['код'];
    this.description = model['описание'];
    this.level = model['уровень'];
  }
}

interface CreateParentPath {
  levels: Level[];
  parent: string[];
  code: string;
}

export const validateDocument = (document) => {
  const result: Level[] = [];
  document.map((classifier) => {
    result.push(new Level(classifier));
  });

  const levelOne = result.filter(({ level }) => level === '1');
  const levelTwo = result.filter(({ level }) => level === '2');
  const levelThree = result.filter(({ level }) => level === '3');
  const levelFour = result.filter(({ level }) => level === '4');
  const levelFive = result.filter(({ level }) => level === '5');

  levelOne.map((level1, index) => {
    level1.parentPath = [level1.code];
    levelTwo.map((level2) => {
      if (level2.code.includes(level1.code)) {
        level2.parentPath = [...level1.parentPath, level2.code];
        levelThree.map((level3) => {
          if (level3.code.includes(level2.code)) {
            level3.parentPath = [...level2.parentPath, level3.code];

            levelFour.map((level4) => {
              if (level4.code.includes(level3.code)) {
                level4.parentPath = [...level3.parentPath, level4.code];

                levelFive.map((level5) => {
                  if (
                    level5.code.includes(
                      level4.code.slice(0, level4.code.length - 2),
                    )
                  ) {
                    level5.parentPath = [...level4.parentPath, level5.code];
                  }
                });
              }
            });
          }
        });
      }
    });
  });

  return {
    levelOne,
    levelTwo,
    levelThree,
    levelFour,
    levelFive,
  };
};
