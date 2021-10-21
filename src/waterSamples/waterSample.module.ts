import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { WaterSampleController } from './waterSample.controller';
import { WaterSampleEntity } from './waterSample.entity';
import { WaterSampleService } from './waterSample.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaterSampleEntity, UserEntity])],
  controllers: [WaterSampleController],
  providers: [WaterSampleService, UserService],
})
export class WaterSampleModule {}
