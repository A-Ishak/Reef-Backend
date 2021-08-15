import { EntityRepository, Repository } from 'typeorm';
import { waterSampleDTO } from '../dtos/water-sample.dto';
import { ResultStatus } from './results-types';
import { Result } from './results.entity';

@EntityRepository(Result)
export class ResultsRepository extends Repository<Result> {
  async getResults(waterSampleDto: waterSampleDTO): Promise<Result[]> {
    const query = this.createQueryBuilder('result');
    const { alkalinity, search } = waterSampleDto;

    if (alkalinity) {
      query.andWhere('result.alkalinity = :alkalinity', { alkalinity });
    }

    if (search) {
      query.andWhere(
        'LOWER(result.alkalinity) LIKE LOWER(:search) OR LOWER(result.ammonia) LIKE LOWER(:search)',
        { search: `%${search}%` },
      );
    }
    const results = await query.getMany();
    return results;
  }

  async createResult(waterSampleDto: waterSampleDTO) {
    const {
      temperature,
      salinity,
      ammonia,
      nitrite,
      nitrate,
      phosphate,
      alkalinity,
      calcium,
      magnesium,
    } = waterSampleDto;
    const result = this.create({
      temperature,
      salinity,
      ammonia,
      nitrite,
      nitrate,
      phosphate,
      alkalinity,
      calcium,
      magnesium,
      status: ResultStatus.SUBMITTED,
    });
    await this.save(result);
    return result;
  }
}
