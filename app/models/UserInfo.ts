import { Gender } from "./Gender";

export interface UserInfo {
  name: string;
  age: number;
  faint: number;
  sleep: number;
  sex: Gender;
  height: number;
  weight: number;
  geneticDiabetes: number;
  geneticHeartDiseases: number;
  HR: number;
  HRV: number;
  systolic_BP: number;
  diastolic_BP: number;
  RR: number;
  SpO2: number;
  temperature: number;
}
