import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateWaterSampleDTO } from '../shared/dtos/water-sample.dto';
import { WaterSampleEntity } from './waterResults.entity';
import { WaterResultsService } from './waterResults.service';

@Controller('waterSample')
export class WaterResultsController {
  constructor(
    @Inject(WaterResultsService)
    private readonly waterResultsService: WaterResultsService,
  ) {}
  @Post('/waterSampleCreation')
  public async createUser(
    @Body() waterSampleDto: CreateWaterSampleDTO,
  ): Promise<WaterSampleEntity> {
    return this.waterResultsService.createNewWaterSample(waterSampleDto);
  }
}
