import { NotImplementedException } from '@nestjs/common';
import { isDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { CreateDateColumn } from 'typeorm';

export class CreateWaterSampleDTO {
  @IsString()
  email: string;

  @IsNumber()
  @IsOptional()
  temperature?: number;

  @IsNumber()
  @IsOptional()
  salinity?: number;

  @IsNumber()
  @IsOptional()
  ammonia?: number;

  @IsNumber()
  @IsOptional()
  nitrite?: number;

  @IsNumber()
  @IsOptional()
  nitrate?: number;

  @IsNumber()
  @IsOptional()
  phosphate?: number;

  @IsNumber()
  @IsOptional()
  alkalinity?: number;

  @IsNumber()
  @IsOptional()
  calcium?: number;

  @IsNumber()
  @IsOptional()
  magnesium?: number;
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
