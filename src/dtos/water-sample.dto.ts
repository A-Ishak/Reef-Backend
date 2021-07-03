import { IsNumber, IsOptional } from 'class-validator';

export class waterSample {
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
