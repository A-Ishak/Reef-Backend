import { Body, Controller, Get, Post } from '@nestjs/common';
import { Console } from 'console';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('temperature') temperature: number,
    @Body('salinity') salinity: number,
    @Body('ammonia') ammonia: number,
    @Body('nitrite') nitrite: number,
    @Body('nitrate') nitrate: number,
    @Body('phosphate') phosphate: number,
    @Body('alkalinity') alkalinity: number,
    @Body('calcium') calcium: number,
    @Body('magnesium') magnesium: number,
  ): Task {
    return this.tasksService.createTask(
      temperature,
      salinity,
      ammonia,
      nitrite,
      nitrate,
      phosphate,
      alkalinity,
      calcium,
      magnesium,
    );
  }
}
