import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as uuid from 'uuid';
// Разрешить только csv
export const csvFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(csv)$/)) {
    return callback(
      new HttpException('Only csv files are allowed!', HttpStatus.BAD_REQUEST),
      false,
    );
  }
  callback(null, true);
};
export const editFileName = (req, file, callback) => {
  const randomName = uuid.v4();
  callback(null, randomName);
};
