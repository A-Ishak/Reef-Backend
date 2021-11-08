import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateWaterSampleDTO } from './water-sample.dto';
import { WaterSampleEntity } from './waterSample.entity';
import { WaterSampleService } from './waterSample.service';

@Controller('waterSample')
export class WaterSampleController {
  constructor(
    @Inject(WaterSampleService)
    private readonly waterResultsService: WaterSampleService,
  ) {}
  @Post('/waterSampleCreation')
  public async createUser(
    @Body() waterSampleDto: CreateWaterSampleDTO,
  ): Promise<WaterSampleEntity> {
    return this.waterResultsService.createNewWaterSample(waterSampleDto);
  }
}
