import { EmployeeModel } from '../models'

export type CreateEmployeeParams = {
  phone: string
  name: string
  email: string
  salary: number
}

export interface CreateEmployee {
  create: (params: CreateEmployeeParams) => Promise<EmployeeModel>
}
