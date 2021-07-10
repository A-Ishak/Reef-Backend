import { Injectable } from '@nestjs/common';
import { Results, ResultStatus, Tasks } from './task.model';
import { v4 as uuid } from 'uuid';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';

@Injectable()
export class TasksService {
  private tasks: Results[] = [];

  getAllTasks(): Results[] {
    return this.tasks;
  }

  createTask(waterSampleDto: waterSampleDTO): Results {
    const {
      temperature,
      salinity,
      ammonia,
      nitrite,
      nitrate,
      phosphate,
      alkalinity,
      calcium,
      magnesium,
    } = waterSampleDto;

    const task: Results = {
      temperature,
      salinity,
      ammonia,
      nitrite,
      nitrate,
      phosphate,
      alkalinity,
      calcium,
      magnesium,
      date: new Date().toLocaleString(),
      status: ResultStatus.SUBMITTED,
    };
    this.tasks.push(task);
    return task;
  }

  getWaterSampleByAlkalinity() {
    return this.tasks.find((selectedDate) => selectedDate.alkalinity);
  }

  getWaterSampleByCalcium() {
    return this.tasks.find((selectedDate) => selectedDate.calcium);
  }
  getWaterSampleByMagnesium() {
    return this.tasks.find((selectedDate) => selectedDate.magnesium);
  }
}
