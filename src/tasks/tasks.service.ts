import { Injectable } from '@nestjs/common';
import { Results, ResultStatus, Tasks } from './task.model';
import { v4 as uuid } from 'uuid';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';
import { alk } from './tasks.controller';

@Injectable()
export class TasksService {
  private results: Results[] = [];

  getAllTasks(): Results[] {
    return this.results;
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
    this.results.push(task);
    return task;
  }

  getWaterSampleByAlkalinity() {
    return this.results.find((selectedDate) => selectedDate.alkalinity);
  }

  getWaterSampleByCalcium() {
    return this.results.find((selectedDate) => selectedDate.calcium);
  }
  getWaterSampleByMagnesium() {
    return this.results.find((selectedDate) => selectedDate.magnesium);
  }
  returnAverageAmountOfAlk() {
    const alks = [];

    for (const alkalin of this.results) {
      alks.push(alkalin.alkalinity);
      //console.log(alks);
    }
    let a = 0;
    for (a of alks) {
      a += a;
    }
    return alks[3];
    const alkAmounts = alks.reduce((a, b) => a + b, 0);

    console.log(alkAmounts);
    return alkAmounts;
  }
}
