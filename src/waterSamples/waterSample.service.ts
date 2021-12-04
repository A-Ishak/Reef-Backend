import { forwardRef } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common/decorators/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWaterSampleDTO } from './water-sample.dto';
import { UserService } from '../user/user.service';
import { WaterSampleEntity } from './waterSample.entity';
import { UsersRepository } from '../user/user.repository';
import { UserEntity } from '../user/user.entity';

@Injectable()
export class WaterSampleService {
  constructor(
    @InjectRepository(WaterSampleEntity)
    private waterSampleRepository: Repository<WaterSampleEntity>,
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  public async waterOptimisationAlgorithm(waterSamples: WaterSampleEntity[]) {
    const latestSample = waterSamples[-1];
  }

  public async createNewWaterSample(waterSample: CreateWaterSampleDTO) {
    const newWaterSample = new WaterSampleEntity();
    const user = await this.usersRepository.findOneOrFail({
      where: { email: waterSample.email },
    });
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

  public async getAllWaterSamples(email: string) {
    const currentUser: Promise<UserEntity> =
      this.usersRepository.findOneOrFail(email);
    return (await currentUser).waterResults;
  }
}
