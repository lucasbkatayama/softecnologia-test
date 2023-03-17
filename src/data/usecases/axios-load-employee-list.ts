import axios from 'axios'
import { EmployeeModel } from '../../domain/models'
import { LoadEmployeeList } from '../../domain/usecases'

export class AxiosLoadEmployeeList implements LoadEmployeeList {
  constructor (
    private readonly url: string
  ) {}

  async load (): Promise<EmployeeModel[]> {
    try {
      const { data } = await axios.get(this.url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}
