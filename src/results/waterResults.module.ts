import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { WaterResultsController } from './waterResults.controller';
import { WaterSampleEntity } from './waterResults.entity';
import { WaterResultsService } from './waterResults.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaterSampleEntity, UserEntity])],
  controllers: [WaterResultsController],
  providers: [WaterResultsService, UserService],
})
export class WaterResultsModule {}
