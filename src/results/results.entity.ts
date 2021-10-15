import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'Water Test' })
export class WaterResult {
  @PrimaryGeneratedColumn('uuid')
  testId: string;

  @Column({ nullable: true })
  temperature: Number;

  @Column({ nullable: true })
  salinity: Number;

  @Column({ nullable: true })
  ammonia: Number;

  @Column({ nullable: true })
  nitrite: Number;

  @Column({ nullable: true })
  nitrate: Number;

  @Column({ nullable: true })
  phosphate: Number;

  @Column({ nullable: true })
  alkalinity: Number;

  @Column({ nullable: true })
  calcium: Number;

  @Column({ nullable: true })
  magnesium: Number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
}
