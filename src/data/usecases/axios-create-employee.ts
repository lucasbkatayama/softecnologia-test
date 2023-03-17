import { CreateEmployee, CreateEmployeeParams } from '../../domain/usecases'
import { EmployeeModel } from '../../domain/models'
import axios from 'axios'

export class AxiosCreateEmployee implements CreateEmployee {
  constructor (
    private readonly url: string
  ) {}

  async create (params: CreateEmployeeParams): Promise<EmployeeModel> {
    try {
      const { data } = await axios.post(this.url, params)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}
