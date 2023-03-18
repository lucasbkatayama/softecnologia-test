import React, { ReactNode, useState } from 'react'
import { EmployeeModel } from '../../domain/models'

interface Context {
  employees: EmployeeModel[]
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeModel[]>>
  employee: EmployeeModel,
  setEmployee: React.Dispatch<React.SetStateAction<EmployeeModel>>
}

export const EmployeeContext = React.createContext<Context>({} as Context)

type PropsTypes = {
  children: ReactNode
}

const initialEmployeeValue = {
  id: '',
  name: '',
  phone: '',
  email: '',
  salary: 0
}

const EmployeeProvider:React.FC<PropsTypes> = (props: PropsTypes) => {
  const { children } = props

  const [employees, setEmployees] = useState<EmployeeModel[]>([] as EmployeeModel[])
  const [employee, setEmployee] = useState<EmployeeModel>(initialEmployeeValue)

  return (
    <EmployeeContext.Provider value={{employees, setEmployees, employee, setEmployee}}>
      {children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeProvider
