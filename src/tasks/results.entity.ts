import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ResultStatus } from './results-types';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  date: string;
  @Column()
  temperature?: string;
  @Column()
  salinity?: string;
  @Column()
  ammonia?: string;
  @Column()
  nitrite?: string;
  @Column()
  nitrate?: string;
  @Column()
  phosphate?: string;
  @Column()
  alkalinity?: string;
  @Column()
  calcium?: string;
  @Column()
  magnesium?: string;
  @Column()
  status: ResultStatus;
}

@Entity()
export class Changes {
  @PrimaryGeneratedColumn()
  date: string;
  @Column()
  temperature?: string;
  @Column()
  salinity?: string;
  @Column()
  ammonia?: string;
  @Column()
  nitrite?: string;
  @Column()
  nitrate?: string;
  @Column()
  phosphate?: string;
  @Column()
  alkalinity?: string;
  @Column()
  calcium?: string;
  @Column()
  magnesium?: string;
}
