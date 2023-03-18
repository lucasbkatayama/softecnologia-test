import React, { memo } from 'react'
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { EmployeeModel } from '../../../domain/models';
import './card.css'

type Prop = {
  onClickEdit: () => void
  onClickRemove: () => void
}

const Card: React.FC<EmployeeModel & Prop> = (props: EmployeeModel & Prop) => {
  const { name, salary, email, phone, onClickEdit, onClickRemove } = props

  return (
    <div className='card'>
      <div>
        <p className='name'>{name}</p>
        <p>{salary}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <div className='icons-container'>
        <FaPencilAlt onClick={onClickEdit} style={{ marginRight: 10, color: 'blue', cursor: 'pointer' }} />
        <FaTrash onClick={onClickRemove} style={{ color: 'red', cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default memo(Card)