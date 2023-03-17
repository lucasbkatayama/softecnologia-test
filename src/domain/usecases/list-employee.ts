import { EmployeeModel } from "../models";

export interface ListEmployee {
  list: () => Promise<EmployeeModel[]>
}
