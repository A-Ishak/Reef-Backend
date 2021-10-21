import { NotImplementedException } from '@nestjs/common';
import { isDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateWaterSampleDTO {
  @IsString()
  email: string;

  @IsNumber()
  @IsOptional()
  temperature?: Number;

  @IsNumber()
  @IsOptional()
  salinity?: Number;

  @IsNumber()
  @IsOptional()
  ammonia?: Number;

  @IsNumber()
  @IsOptional()
  nitrite?: Number;

  @IsNumber()
  @IsOptional()
  nitrate?: Number;

  @IsNumber()
  @IsOptional()
  phosphate?: Number;

  @IsNumber()
  @IsOptional()
  alkalinity?: Number;

  @IsNumber()
  @IsOptional()
  calcium?: Number;

  @IsNumber()
  @IsOptional()
  magnesium?: Number;
}


export class OptimisedWaterParametersDTO {
  @IsNumber()
  @IsOptional()
  temperature?: string;

  @IsNumber()
  @IsOptional()
  salinity?: string;

  @IsNumber()
  @IsOptional()
  ammonia?: string;

  @IsNumber()
  @IsOptional()
  nitrite?: string;

  @IsNumber()
  @IsOptional()
  nitrate?: string;

  @IsNumber()
  @IsOptional()
  phosphate?: string;

  @IsNumber()
  @IsOptional()
  alkalinity?: string;

  @IsNumber()
  @IsOptional()
  calcium?: string;

  @IsNumber()
  @IsOptional()
  magnesium?: string;
}
