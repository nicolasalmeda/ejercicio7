import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import EmpleadosRow from './EmpleadosRow';
import EmpleadoAvatar from './EmpleadoAvatar';
import '../css/empleadoList.css';


const EmpleadoList = ({ empleados }) => {
  return (
    <Container className='EmpleadoList'>
      <Row className='rowContainer'>
        {empleados.map((empleado) => (
          <Col key={empleado.id} md={4}>
            <div className="empleado-list">
              <EmpleadoAvatar pic={empleado.pic} />
              <EmpleadosRow
                fullName={empleado.fullName}
                title={empleado.title}
                department={empleado.department}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EmpleadoList;