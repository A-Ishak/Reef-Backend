import { Injectable } from '@nestjs/common';
import { Results, ResultStatus, Tasks } from './task.model';
import { v4 as uuid } from 'uuid';
import { waterSampleDTO } from 'src/dtos/water-sample.dto';

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
    const alks: number[] = [];

    for (const alkalin of this.results) {
      alks.push(alkalin.alkalinity);
      //console.log(alks);
    }
    let a = 0;
    for (const b of alks) {
      console.log(typeof b);
      a += b;
    }
    return a;
    const alkAmounts = alks.reduce((a, b) => a + b, 0);

    console.log(alkAmounts);
    return alkAmounts;
  }
  deleteResultsWith8Alk(alk: number) {
    this.results = this.results.filter(
      (individualAlk) => individualAlk.alkalinity != alk,
    );
    return this.results;
  }
  changeStatus(alk: number) {
    for (const result of this.results) {
      if (result.alkalinity == alk) {
        result.status = ResultStatus.NOT_SUBMITTED;
      }
    }
    return this.results;
  }
}
