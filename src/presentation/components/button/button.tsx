import React, { memo } from 'react'
import './Button.css'

type Props = {
  label: string
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = (props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { label } = props

  return (
    <button className='button' {...props}>
      {label}
    </button>
  )
}

export default memo(Button)