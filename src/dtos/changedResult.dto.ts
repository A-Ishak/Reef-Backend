import { IsNumber, IsOptional } from 'class-validator';

export class changedResult {
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

  @IsOptional()
  search?: string;
}
