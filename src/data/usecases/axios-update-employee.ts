import axios from 'axios'
import { UpdateEmployee, UpdateEmployeeParams } from '../../domain/usecases'

export class AxiosUpdateEmployee implements UpdateEmployee {
  constructor (
    private readonly url: string
  ) {}

  async update (params: UpdateEmployeeParams): Promise<null> {
    try {
      const { data } = await axios.put(this.url, params)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}
