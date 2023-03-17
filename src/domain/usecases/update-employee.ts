export type UpdateEmployeeParams = {
  id: string
  phone?: string
  name?: string
  email?: string
  salary?: number
}

export interface UpdateEmployee {
  update: (params: UpdateEmployeeParams) => Promise<null>
}
