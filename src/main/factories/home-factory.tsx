import React from 'react'
import { AxiosCreateEmployee, AxiosLoadEmployeeList, AxiosRemoveEmployee, AxiosUpdateEmployee } from '../../data/usecases'
import Home from '../../presentation/pages/home/home'

const HomeFactory: React.FC = () => {
  const axiosLoadEmployeeList = new AxiosLoadEmployeeList(`${import.meta.env.VITE_API_DOMAIN}/employee`)
  const axiosRemoveEmployee = new AxiosRemoveEmployee(`${import.meta.env.VITE_API_DOMAIN}/employee`)
  const axiosCreateEmployee = new AxiosCreateEmployee(`${import.meta.env.VITE_API_DOMAIN}/employee`)
  const axiosUpdateEmployee = new AxiosUpdateEmployee(`${import.meta.env.VITE_API_DOMAIN}/employee`)

  console.log(import.meta.env)

  return (
    <Home 
      loadEmployeeList={axiosLoadEmployeeList}
      removeEmployee={axiosRemoveEmployee}
      createEmployee={axiosCreateEmployee}
      updateEmployee={axiosUpdateEmployee}
    />
  )
}

export default HomeFactory