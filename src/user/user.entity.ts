import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { EAquariumTypes } from '../shared/types/aquariumTypes';

@Entity({ name: 'User' })
export class WaterResult {
  @PrimaryColumn('uuid')
  email: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column('enum', { array: true, nullable: true, enum: EAquariumTypes, default: [] })
  aquariumType: EAquariumTypes[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}
