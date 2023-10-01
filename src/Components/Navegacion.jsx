import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logosolo from '../assets/logosolo.png'

//Importar contexto
import Context from "../Context";
import { useContext } from "react";

const Navegacion = () => {

  //para carrito y detalle total en navbar
  const { prevCarrito } = useContext(Context)

  const total = prevCarrito.reduce((a, { price, count }) => a + price * count, 0);


  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive")

  return (
    <div>
      <Navbar expand="lg" bg="primary" className='navegacion box-shadow' fixed='top'>
        <Container>
          <Navbar.Brand href="/" className='brand'>
            <img src={logosolo} alt="La Ñoñería.cl" className='logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Registro</Nav.Link>
              <Nav.Link href="/tienda">Tienda</Nav.Link>
              <Nav.Link href="/carrito">Carrito</Nav.Link>
              <Nav.Link className={setActiveClass} to="/Carrito">
                🛒 Carrito: ${total ? total.toLocaleString() : 0}
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navegacion