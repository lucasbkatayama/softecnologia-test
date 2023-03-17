import { EmployeeModel } from '../models'

export interface CreateEmployee {
  create: (params: EmployeeModel) => Promise<null>
}
