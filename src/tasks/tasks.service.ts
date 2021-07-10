import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, Tasks } from './task.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }
  createTasks(id: string, description: string): Tasks {
    const task: Tasks = {
      id: id,
      description: description,
    };
    return task;
  }

  createTask(
    temperature?: number,
    salinity?: number,
    ammonia?: number,
    nitrite?: number,
    nitrate?: number,
    phosphate?: number,
    alkalinity?: number,
    calcium?: number,
    magnesium?: number,
  ): Task {
    const task: Task = {
      temperature: temperature,
      salinity: salinity,
      ammonia: ammonia,
      nitrite: nitrite,
      nitrate: nitrate,
      phosphate: phosphate,
      alkalinity: alkalinity,
      calcium: calcium,
      magnesium: magnesium,
      status: TaskStatus.SUBMITTED,
    };
    this.tasks.push(task);
    return task;
  }
}
