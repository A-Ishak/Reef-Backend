import { Module } from '@nestjs/common';
import { alk, TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController, alk],
  providers: [TasksService],
})
export class TasksModule {}
