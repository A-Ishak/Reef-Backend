import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransformInterceptor } from '../shared/interceptors/transform.interceptor';
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
  @UseInterceptors(new TransformInterceptor())
  @Post('/waterSampleCreation')
  public async createWaterSample(
    @Body(new EmailToLowerCasePipe()) waterSampleDto: CreateWaterSampleDTO,
  ): Promise<WaterSampleEntity> {
    return this.waterResultsService.createNewWaterSample(waterSampleDto);
  }

  @Get('/getAllWaterSamples')
  public async getAllWaterSamples(
    @Body() email: string,
  ): Promise<WaterSampleEntity[]> {
    return this.waterResultsService.getAllWaterSamples(email);
  }
}
