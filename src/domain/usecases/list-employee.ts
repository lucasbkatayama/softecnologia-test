import { EmployeeModel } from "../models";

export interface ListEmployee {
  update: () => Promise<EmployeeModel[]>
}
