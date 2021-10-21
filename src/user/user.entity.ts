import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { EAquariumTypes } from '../shared/types/aquariumTypes';

@Entity({ name: 'User' })
export class UserEntity {
  @PrimaryColumn({ unique: true })
  email: string;

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
