import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profile from '../assets/profile.svg'

const Perfil = () => {
  return (
    <div className="perfil flex container">
        <Row className='container'>
            <Col>
                <div className="card1">
                <h1>Mi Perfil</h1>
                <img src={profile} className='placeholderProfile'></img>
                <p>¡Bienvenido <span>NOMBRE</span>!</p>
                </div>
            </Col>
            <Col>
                <div className="card2">
                <h4>¿Qué te gustaría hacer ahora?</h4>
                <ul>
                    <li>Ver mis productos</li>
                    <li>Vender un producto</li>
                    <li>Ir a Mi Carrito</li>
                    <li>Editar Mi Perfil</li>
                    <li>Cerrar Sesión</li>
                </ul>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Perfil