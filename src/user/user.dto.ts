import {
  isDate,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateDateColumn } from 'typeorm';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { EAquariumTypes } from '../shared/types/aquariumTypes';

export class CreateUserDto {
  @IsEmail()
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  password: string;

  @IsString()
  repeatPassword: string;

  @IsString()
  @MaxLength(50)
  firstName?: string;

  @IsString()
  @MaxLength(50)
  lastName?: string;
}

export class AuthCredentialsDto {
  @IsEmail()
  @MaxLength(255)
  email: string;
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}

export class UpdateUserAquariumTypeDto {
  email?: string;
  aquariumType?: EAquariumTypes;
}

export class AddWaterResultToUserDto {
  email?: string;
  waterSample: WaterSampleEntity;
}

export class RegisterNewAccountDto {
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
}
