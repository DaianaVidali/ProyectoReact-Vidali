import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWidgetComponent from './CartWidgetComponent/CartWidgetComponent';


 

const NavBarComponent = () => {

  return (

    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Morena</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Productos</Nav.Link>
          <Nav.Link href="#link">Carrito</Nav.Link>
          <NavDropdown title="Productos Sale" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Abrigos
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Jean</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Accesorios
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <CartWidgetComponent/>
    </Container>
  </Navbar>

  );
  
}

 

export default NavBarComponent