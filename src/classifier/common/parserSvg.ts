import * as fs from 'fs';
import * as path from 'path';
import { parse } from 'papaparse';

export const parserSvg = async (file) => {
  const csvFile = fs.readFileSync(path.join(file.path));
  const csvData = csvFile.toString();
  const parsedCsv = await parse(csvData, {
    header: true,
    skipEmptyLines: true,
    transformHeader(header: string): string {
      return header.toLowerCase().replace('#', '').trim();
    },
    complete: (results) => results.data,
  });

  return parsedCsv;
};
