import { Delete, Patch, Query } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { getgid } from 'process';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';
import { QueryResult } from 'typeorm';
import { Results, ResultStatus } from './results-types';
import { Result } from './results.entity';
import { ResultsService } from './results.service';

@Controller('reef')
export class ResultsController {
  constructor(private resultsService: ResultsService) {}
  // @Get()
  // getAllTasks(): Results[] {
  //   return this.tasksService.getAllTasks();
  // }

  @Get()
  getResults(@Query() waterSampleDto: waterSampleDTO): Promise<Result[]> {
    return this.resultsService.getResults(waterSampleDto);
  }

  @Get('/:alk')
  getResultByAlk(@Param('alk') alk: string): Promise<Result> {
    return this.resultsService.getResultByAlkalinity(alk);
  }

  @Post()
  createTask(@Body() waterSampleDto: waterSampleDTO): Promise<Result> {
    return this.resultsService.createNewResult(waterSampleDto);
  }

  // @Get('/alk')
  // getAlkAverage() {
  //   return this.tasksService.returnAverageAmountOfAlk();
  // }

  @Delete('/:alkalinity')
  deleteResultsWith8Alk(
    @Param('alkalinity') alkalinity: string,
  ): Promise<void> {
    return this.resultsService.deleteByAlkalinity(alkalinity);
  }
  @Patch('/:alkalinity/status')
  changeSubmitStatus(@Param('alkalinity') alkalinity: string): Promise<Result> {
    return this.resultsService.changeStatus(alkalinity, ResultStatus.SUBMITTED);
  }
}
