import { Level1 } from '../level_1/entities/level_1.entity';

export const getClassifierByCode = (level1: Level1[], code: string) => {
  const result = [];

  level1.map((level) => {
    if (level.code === code) {
      result.push(level);
    }
    level.level2.map((level) => {
      if (level.code === code) {
        result.push(level);
      }
      level.level3.map((level) => {
        if (level.code === code) {
          result.push(level);
        }
        level.level4.map((level) => {
          if (level.code === code) {
            result.push(level);
          }
          level.level5.map((level) => {
            if (level.code === code) {
              result.push(level);
            }
          });
        });
      });
    });
  });

  return result;
};
