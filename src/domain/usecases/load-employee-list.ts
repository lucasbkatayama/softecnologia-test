import { EmployeeModel } from "../models";

export interface LoadEmployeeList {
  load: () => Promise<EmployeeModel[]>
}
