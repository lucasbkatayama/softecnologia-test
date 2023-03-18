import React from 'react'
import ReactDOM from 'react-dom/client'
import '../presentation/styles/vars.css'
import '../presentation/styles/globals.css'
import HomeFactory from './factories/home-factory'
import EmployeeProvider from '../presentation/context/employee-context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <EmployeeProvider>
      <HomeFactory/>
    </EmployeeProvider>
  </React.StrictMode>,
)
