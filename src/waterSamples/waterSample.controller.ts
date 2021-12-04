import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EmailToLowerCasePipe } from '../shared/pipes/validation-pipes';
import { CreateWaterSampleDTO } from './water-sample.dto';
import { WaterSampleEntity } from './waterSample.entity';
import { WaterSampleService } from './waterSample.service';

@Controller('waterSample')
@UseGuards(AuthGuard())
export class WaterSampleController {
  constructor(
    @Inject(WaterSampleService)
    private readonly waterResultsService: WaterSampleService,
  ) {}
  @Post('/waterSampleCreation')
  public async createUser(
    @Body(new EmailToLowerCasePipe()) waterSampleDto: CreateWaterSampleDTO,
  ): Promise<WaterSampleEntity> {
    return this.waterResultsService.createNewWaterSample(waterSampleDto);
  }
}
