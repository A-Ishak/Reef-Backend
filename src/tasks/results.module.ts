import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultsController } from './results.controller';
import { ResultsRepository } from './results.repository';
import { ResultsService } from './results.service';

@Module({
  imports:[TypeOrmModule.forFeature([ResultsRepository])],
  controllers: [ResultsController],
  providers: [ResultsService],
})
export class ResultsModule {}
