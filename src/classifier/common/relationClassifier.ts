export const relationClassifier = (level, nextLevel, relationLevel = '') => {
  const result = [];
  const relation = relationLevel ? relationLevel : `level${level[0]?.level}`;
  for (let i = 0; i < level.length; i++) {
    for (let j = 0; j < nextLevel.length; j++) {
      if (nextLevel[j].code.includes(level[i].code))
        result.push({ ...nextLevel[j], [relation]: level[i] });
    }
  }

  if (!result.length) {
    for (let i = 0; i < level.length; i++) {
      for (let j = 0; j < nextLevel.length; j++) {
        if (
          nextLevel[j].code.includes(
            level[i].code.slice(0, nextLevel[j].code.length - 2),
          )
        )
          result.push({ ...nextLevel[j], [relation]: level[i] });
      }
    }
  }

  return result;
};
