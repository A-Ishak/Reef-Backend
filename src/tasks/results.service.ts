import { Injectable, NotFoundException } from '@nestjs/common';
import { Results, ResultStatus } from './results-types';
import { v4 as uuid } from 'uuid';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';
import { ResultsRepository } from './results.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './results.entity';
import { getResulsDto } from '../dtos/getResultsFilter.dto';
import { changedResult } from '../dtos/changedResult.dto';
import { ammoniaCalculation } from '../calculations/waterCalculations';

@Injectable()
export class ResultsService {
  constructor(
    @InjectRepository(ResultsRepository)
    private resultsRepository: ResultsRepository,
  ) {}

  async createNewResult(waterSampleDto: waterSampleDTO): Promise<Result> {
    return this.resultsRepository.createResult(waterSampleDto);
  }

  async getResultByAlkalinity(alkalinity: string): Promise<Result> {
    const foundAlk = await this.resultsRepository.findOne({
      alkalinity,
    });
    if (!foundAlk) {
      throw new NotFoundException('No result has that Alk');
    }
    return foundAlk;
  }

  async deleteByAlkalinity(alkalinity: string): Promise<void> {
    const deletedResult = await this.resultsRepository.delete({ alkalinity });

    if (deletedResult.affected === 0) {
      throw new NotFoundException('Not found result with that alk');
    }
  }

  async getResults(waterSampleDto: waterSampleDTO): Promise<Result[]> {
    return this.resultsRepository.getResults(waterSampleDto);
  }

  async returnChanges(result: Result): Promise<changedResult> {
    let changes: changedResult;
    changes.ammonia; // = ammoniaCalculation(result.ammonia)
    return changes;
  }

  async changeStatus(
    alkalinity: string,
    resultStatus: ResultStatus.SUBMITTED,
  ): Promise<Result> {
    const result = await this.getResultByAlkalinity(alkalinity);

    result.status = resultStatus;
    await this.resultsRepository.save(result);

    return result;
  }
}
