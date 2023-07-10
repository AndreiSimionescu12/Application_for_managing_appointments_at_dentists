import React, {createContext, useContext} from 'react'
import { Dashboardheader } from '../dashboardheader/Dashboardheader'
import { Layout } from '../layout/Layout'
import { Listaadministratori } from '../listaadministratori/Listaadministratori'
import { useLocation } from 'react-router-dom'
export const Utilizatori = () => {
  
  return (
    <div className='dashboard-container'>
      <Layout/>
      <div className='dashboard-body'>
        <div className='dashboard-body-content'>
        <Dashboardheader/>
        <div className='content-lista'>
            <Listaadministratori/>
        </div>
        </div>
      </div>
    </div>
  )
}

