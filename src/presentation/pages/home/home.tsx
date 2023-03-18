import { useRef, useContext, useState, useEffect } from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

import './home.css'
import { Header, Card, Footer, Modal, Button, Form, Spinner } from '../../components';
import { EmployeeContext } from '../../context/employee-context';
import { LoadEmployeeList, CreateEmployee, RemoveEmployee, UpdateEmployee } from '../../../domain/usecases';
import { EmployeeModel } from '../../../domain/models';

type Props = {
  loadEmployeeList: LoadEmployeeList,
  createEmployee: CreateEmployee,
  removeEmployee: RemoveEmployee,
  updateEmployee: UpdateEmployee
}

const Home:React.FC<Props> = ({ loadEmployeeList, createEmployee, removeEmployee, updateEmployee }: Props) => {
  const createFormRef = useRef<HTMLFormElement>(null);
  const { employees, setEmployees, employee, setEmployee } = useContext(EmployeeContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false)
  const [showEditModal, setShowEditModal] = useState<boolean>(false)

  useEffect(() => {
    if (loading) return
    setLoading(true)
    const fetchData = async () => {
      try {
        const data = await loadEmployeeList.load();
        setEmployees(data)
        setLoading(false)
      } catch (error) {
        setErrorMessage(error.message)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const onSubmitCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      await createEmployee.create(employee)
      const data = await loadEmployeeList.load();
      setEmployees(data)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }

  const onSubmitEdit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      await updateEmployee.update(employee)
      const data = await loadEmployeeList.load();
      setEmployees(data)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }

  const handleClickRemove = async (id: string) => {
    if (loading) return
    setLoading(true)
    try {
      await removeEmployee.remove({ id })
      const data = await loadEmployeeList.load();
      setEmployees(data)
      setLoading(false)
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setEmployee((currentValue) => ({...currentValue, [name]: value}))
  }

  const handleClickEdit = (employee: EmployeeModel) => {
    setEmployee(employee)
    setShowEditModal(true)
  }
  
  return (
    <div className='main'>
      <Header />
      <section>
        <div className='employee-header'>
          <h2>Funcionários:</h2>
          <Button label='Novo Cadastro' onClick={() => setShowCreateModal(true)} />
        </div>
        {!loading && <div className='cards-wrap'>
          {employees.length !== 0 && employees?.map((employee) => <Card key={employee.id} {...employee} onClickRemove={() => handleClickRemove(employee.id)} onClickEdit={() => handleClickEdit(employee)} />)}
          {employees.length === 0 && !loading && (<p>Nenhum funcionário cadastrado</p>)}
        </div>}
        {loading && <Spinner />}
      </section>
      <Footer />
      <Modal open={showCreateModal} onClickClose={() => setShowCreateModal(false)}>
        <Form onChangeInput={handleChange} employee={employee} createFormRef={createFormRef} title='Cadastro' onSubmit={onSubmitCreate} />
      </Modal>
      <Modal open={showEditModal} onClickClose={() => setShowEditModal(false)}>
        <Form onChangeInput={handleChange} employee={employee} createFormRef={createFormRef} title='Editar' onSubmit={onSubmitEdit} />
      </Modal>
      <Modal open={false} onClickClose={() => setErrorMessage('')}>
        <FaExclamationTriangle size={50} color='#ffb703' />
        <p className='modal-text'>{errorMessage}</p>
      </Modal>
    </div>
  )
}

export default Home
