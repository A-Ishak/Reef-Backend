export interface Results {
  date: string;
  temperature?: number;

  salinity?: number;

  ammonia?: number;

  nitrite?: number;

  nitrate?: number;

  phosphate?: number;

  alkalinity?: number;

  calcium?: number;

  magnesium?: number;
  status: ResultStatus;
}

export enum ResultStatus {
  SUBMITTED = 'SUMBITTED',
  NOT_SUBMITTED = 'NOT_SUBMITTED',
}

export interface Tasks {
  id: string;
  description: string;
}
