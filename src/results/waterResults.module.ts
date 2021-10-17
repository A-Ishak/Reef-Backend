import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { waterSampleDTO } from '../shared/dtos/water-sample.dto';
import { UserEntity } from '../user/user.entity';
import { WaterResultsController } from './waterResults.controller';
import { WaterResultsEntity } from './waterResults.entity';
import { WaterResultsService } from './waterResults.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaterResultsEntity, UserEntity])],
  controllers: [WaterResultsController],
  providers: [WaterResultsService],
})
export class WaterResultsModule {}
