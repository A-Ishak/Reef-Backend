import { isDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';
import { WaterSampleEntity } from '../../waterSamples/waterSample.entity';
import { EAquariumTypes } from '../types/aquariumTypes';

export class CreateUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  aquariumType?: EAquariumTypes;
}

export class UpdateUserAquariumTypeDto {
  email?: string;
  aquariumType?: EAquariumTypes;
}

export class AddWaterResultToUserDto {
  email?: string;
  waterSample: WaterSampleEntity;
}
