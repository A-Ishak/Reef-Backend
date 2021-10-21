import { Injectable } from '@nestjs/common/decorators/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWaterSampleDTO } from '../shared/dtos/water-sample.dto';
import { UserService } from '../user/user.service';
import { WaterSampleEntity } from './waterSample.entity';

@Injectable()
export class WaterSampleService {
  constructor(
    @InjectRepository(WaterSampleEntity)
    private waterSampleRepository: Repository<WaterSampleEntity>,
    private userService: UserService,
  ) {}

  public async waterOptimisationAlgorithm(waterSamples: WaterSampleEntity[]) {
    const latestSample = waterSamples[-1];

  }

  public async createNewWaterSample(waterSample: CreateWaterSampleDTO) {
    const newWaterSample = new WaterSampleEntity();
    const user = await this.userService.getUserByEmail(waterSample.email);
    newWaterSample.alkalinity = waterSample.alkalinity;
    newWaterSample.ammonia = waterSample.ammonia;
    newWaterSample.calcium = waterSample.calcium;
    newWaterSample.magnesium = waterSample.magnesium;
    newWaterSample.nitrate = waterSample.nitrate;
    newWaterSample.nitrite = waterSample.nitrite;
    newWaterSample.phosphate = waterSample.phosphate;
    newWaterSample.salinity = waterSample.salinity;
    newWaterSample.temperature = waterSample.temperature;
    newWaterSample.user = user;

    const createdWaterSample = this.waterSampleRepository.save(newWaterSample);
    return createdWaterSample;
  }
}
