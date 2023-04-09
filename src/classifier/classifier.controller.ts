import {
  Controller,
  Get,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import * as path from 'path';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ClassifierService } from './classifier.service';
import { csvFileFilter, editFileName } from '../utils/file-upload.utils';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Класификаторы')
@Controller('classifier')
@UseGuards(JwtAuthGuard)
export class ClassifierController {
  constructor(private classifierService: ClassifierService) {}

  @Post()
  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiConsumes('multipart/form-data')
  @ApiBearerAuth()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: path.resolve(__dirname, '..', 'uploads'),
        filename: editFileName,
      }),
      fileFilter: csvFileFilter,
    }),
  )
  create(@UploadedFile() file: Express.Multer.File) {
    try {
      return this.classifierService.create(file);
    } catch (e) {}
  }

  @ApiOperation({
    summary: 'Запрос на получение классификаторов по Id документа или коду',
  })
  @ApiQuery({ name: 'id', required: false })
  @ApiQuery({ name: 'code', required: false })
  @ApiBearerAuth()
  @Get()
  findAll(@Query('id') id?: string, @Query('code') code?: string) {
    return this.classifierService.findAll(id, code);
  }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.classifierService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateClassifierDto: UpdateClassifierDto,
  // ) {
  //   return this.classifierService.update(+id, updateClassifierDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.classifierService.remove(+id);
  // }
}
