export type RemoveEmployeeParams = {
  id: string
}

export interface RemoveEmployee {
  remove: (params: RemoveEmployeeParams) => Promise<null>
}
