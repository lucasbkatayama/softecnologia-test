import React, { memo } from 'react'
import { Button } from '../'
import { EmployeeModel } from '../../../domain/models'
import './form.css'

type Props = {
  createFormRef: React.RefObject<HTMLFormElement>,
  title: string,
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void,
  employee: EmployeeModel
}

const Form: React.FC<Props & React.FormHTMLAttributes<HTMLFormElement>> = (props: Props & React.FormHTMLAttributes<HTMLFormElement>) => {
  const {title, onSubmit, onChangeInput, employee} = props

  return (
    <form className='form' onSubmit={onSubmit}>
      <label>{title}</label>
      <input onChange={onChangeInput} name='name' type='text' placeholder='Nome' value={employee['name']} />
      <input onChange={onChangeInput} name='email' placeholder='Email' type='email' value={employee['email']} />
      <input onChange={onChangeInput} name='phone' placeholder='Telefone' value={employee['phone']} />
      <input onChange={onChangeInput} name='salary' placeholder='Salário' type='number' value={employee['salary']} />
      <Button type='submit' label='Salvar' />
    </form>
  )
}

export default memo(Form)