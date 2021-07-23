import { Delete, Patch } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
  @Get('/getAlk')
  getTaskById() {
    for (const results of this.tasksService.getAllTasks()) {
      if (results.alkalinity != 8) {
        console.log('Lower your alk!!!');
      }
    }
  }
  @Get('/alk')
  getAlkAverage() {
    return this.tasksService.returnAverageAmountOfAlk();
  }

  @Delete('/:alk')
  deleteResultsWith8Alk(@Param('alk') alk: number) {
    return this.tasksService.deleteResultsWith8Alk(alk);
  }
  @Patch('/:alky')
  changeSubmitStatus(@Param('alky') alky: number) {
    return this.tasksService.changeStatus(alky);
  }
}
