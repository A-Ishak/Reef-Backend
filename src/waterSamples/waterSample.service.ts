import { forwardRef } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common/decorators/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateWaterSampleDTO,
  OptimisedWaterParametersDTO,
} from './water-sample.dto';
import { UserService } from '../user/user.service';
import { WaterSampleEntity } from './waterSample.entity';
import { UsersRepository } from '../user/user.repository';
import { UserEntity } from '../user/user.entity';
import { EAquariumTypes } from 'src/shared/types/aquariumTypes';
import { paramaterAlgorithm } from 'src/shared/calculations/waterCalculations';

@Injectable()
export class WaterSampleService {
  constructor(
    @InjectRepository(WaterSampleEntity)
    private waterSampleRepository: Repository<WaterSampleEntity>,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  public async createNewWaterSample(waterSample: CreateWaterSampleDTO) {
    const newWaterSample = new WaterSampleEntity();
    const user = await this.usersRepository.findOneOrFail({
      where: { email: waterSample.email },
    });
    newWaterSample.alkalinity = waterSample.alkalinity;
    newWaterSample.pH = waterSample.pH;
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

  public async getAllWaterSamples(email: string) {
    const currentUser = (await this.usersRepository.findOneOrFail(email))
      .waterResults;
    return currentUser;
  }

  public async latestParamValues(user: UserEntity): Promise<WaterSampleEntity> {
    const latestParamValues = new WaterSampleEntity();
    latestParamValues.temperature = user.waterResults[-1].temperature;
    latestParamValues.salinity = user.waterResults[-1].salinity;
    latestParamValues.pH = user.waterResults[-1].pH;
    latestParamValues.ammonia = user.waterResults[-1].ammonia;
    latestParamValues.nitrite = user.waterResults[-1].nitrite;
    latestParamValues.nitrate = user.waterResults[-1].nitrate;
    latestParamValues.phosphate = user.waterResults[-1].phosphate;
    latestParamValues.alkalinity = user.waterResults[-1].alkalinity;
    latestParamValues.calcium = user.waterResults[-1].calcium;
    latestParamValues.magnesium = user.waterResults[-1].magnesium;

    return latestParamValues;
  }

  public async waterOptimisationAlgorithm(email: string) {
    const user = this.usersRepository.findOneOrFail({
      where: { email: email },
    });
    const waterSamples = this.getAllWaterSamples(email);
    switch ((await user).aquariumType) {
      case EAquariumTypes.FOWLR:
        paramaterAlgorithm(waterSamples[-1]);
        break;
      case EAquariumTypes.SOFT_CORALS:
        break;
      case EAquariumTypes.LPS:
        break;
      case EAquariumTypes.MIXED:
        break;
      case EAquariumTypes.SPS:
        break;
      default:
        console.log('User has not specified their aquarium type');
        break;
    }
  }
}
