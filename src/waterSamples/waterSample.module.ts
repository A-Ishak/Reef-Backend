import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';
import { UserEntity } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { WaterSampleController } from './waterSample.controller';
import { WaterSampleEntity } from './waterSample.entity';
import { WaterSampleService } from './waterSample.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WaterSampleEntity, UserEntity]),
    forwardRef(() => UserModule),
  ],

  controllers: [WaterSampleController],
  providers: [WaterSampleService],
  exports: [WaterSampleService],
})
export class WaterSampleModule {}
