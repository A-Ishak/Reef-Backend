import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterSampleController } from '../waterSamples/waterSample.controller';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { WaterSampleModule } from '../waterSamples/waterSample.module';
import { WaterSampleService } from '../waterSamples/waterSample.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, WaterSampleEntity]),
    forwardRef(() => WaterSampleModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
