import { isDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';
import { EAquariumTypes } from '../types/aquariumTypes';

export class UserDto {
  email?: string;

  firstName?: string;

  lastName?: string;

  aquariumType?: EAquariumTypes;
}
