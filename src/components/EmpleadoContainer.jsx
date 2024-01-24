import React from 'react'
import '../css/empleadoContainer.css'
import { Container } from 'react-bootstrap'
import  EmpleadoList  from './EmpleadoList'
import  empleados  from '../assets/db.js'

export const EmpleadoContainer = () => {
  return (
    <Container className='EmpleadoContainer'>
      <h2 className='title'>Empleados</h2>
      <EmpleadoList empleados={empleados} />
    </Container>
  )
}
