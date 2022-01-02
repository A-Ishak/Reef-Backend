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

export class waterSampleDto {
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
  @IsString()
  @IsOptional()
  temperature?: string;

  @IsString()
  @IsOptional()
  salinity?: string;

  @IsString()
  @IsOptional()
  ammonia?: string;

  @IsString()
  @IsOptional()
  nitrite?: string;

  @IsString()
  @IsOptional()
  nitrate?: string;

  @IsString()
  @IsOptional()
  phosphate?: string;

  @IsString()
  @IsOptional()
  alkalinity?: string;

  @IsString()
  @IsOptional()
  calcium?: string;

  @IsString()
  @IsOptional()
  magnesium?: string;
}
