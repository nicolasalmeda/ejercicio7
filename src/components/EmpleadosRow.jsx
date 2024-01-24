import React from 'react';
import '../css/empleadoRow.css';

const EmpleadoRow = ({ fullName, title, department }) => {
  return (
    <div className="empleado-row">
      <div>
          <p className='name'>{fullName}</p>
      </div>
      <div className='empleadotitle'>
          <p className='empleadoTitle'>{title}</p>
          <p className='empleadoFunction'>{department}</p>

      </div>
    </div>
  );
};

export default EmpleadoRow;