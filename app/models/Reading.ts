export interface Reading {
  _id: string;
  userId: string;
  name:string;
  age: number;
  sex: number;
  height: number;
  weight: number;
  geneticDiabetes: number;
  geneticHeartDiseases: number;
  HR: number;
  HRV: number;
  systolic_BP?: number;
  diastolic_BP?: number;
  RR: number;
  SpO2: number;
  temperature: number;
  faint: number;
  sleep: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
