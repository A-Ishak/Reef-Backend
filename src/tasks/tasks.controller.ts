import { Body, Controller, Get, Post } from '@nestjs/common';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';
import { Results } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(): Results[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() waterSampleDto: waterSampleDTO): Results {
    return this.tasksService.createTask(waterSampleDto);
  }
  @Get()
  getTaskById() {
    for (const results of this.tasksService.getAllTasks()) {
      if (results.alkalinity != 8) {
        console.log('Lower your alk!!!');
      }
    }
  }
}
