import axios from 'axios'
import { RemoveEmployee, RemoveEmployeeParams } from '../../domain/usecases'

export class AxiosRemoveEmployee implements RemoveEmployee {
  constructor (
    private readonly url: string
  ) {}

  async remove (params: RemoveEmployeeParams): Promise<null> {
    try {
      const { data } = await axios.delete(`${this.url}/${params.id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
}
