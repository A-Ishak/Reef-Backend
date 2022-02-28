import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'Water Test' })
export class WaterSampleEntity {
  @PrimaryGeneratedColumn('uuid')
  testId: string;

  @Column({ nullable: true })
  temperature: number;

  @Column({ nullable: true })
  pH: number;

  @Column({ nullable: true })
  salinity: number;

  @Column({ nullable: true })
  ammonia: number;

  @Column({ nullable: true })
  nitrite: number;

  @Column({ nullable: true })
  nitrate: number;

  @Column({ nullable: true })
  phosphate: number;

  @Column({ nullable: true })
  alkalinity: number;

  @Column({ nullable: true })
  calcium: number;

  @Column({ nullable: true })
  magnesium: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.waterResults)
  @Exclude({ toPlainOnly: true })
  user: UserEntity;
}
