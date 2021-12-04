import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
  Unique,
} from 'typeorm';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { EAquariumTypes } from '../shared/types/aquariumTypes';
import { IsEmail } from 'class-validator';

@Entity({ name: 'User' })
@Unique(['email'])
export class UserEntity {
  @PrimaryColumn({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('enum', {
    nullable: true,
    enum: EAquariumTypes,
  })
  aquariumType: EAquariumTypes;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;

  @OneToMany(() => WaterSampleEntity, (waterResults) => waterResults.user, {
    cascade: true,
    eager: true,
  })
  waterResults?: WaterSampleEntity[];
}
