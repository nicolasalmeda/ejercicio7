import React from 'react';
import { Image } from 'react-bootstrap';
import '../css/empleadoAvatar.css';

const EmpleadoAvatar = ({ pic }) => {
  return (
    <Image className='img' src={pic} alt={pic} roundedCircle fluid/>
  );
};

export default EmpleadoAvatar;