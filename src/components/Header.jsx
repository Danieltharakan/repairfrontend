import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AddServices from './AddServices';

function Header() {
    
  return (
    <div>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="./"><b>REPAIRIO</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./selectedservices">Selected Services</Nav.Link>
            <Nav.Link href="./Accessories">Accessories</Nav.Link>
            <NavDropdown title="Our Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="./laptopservices">Laptop Services</NavDropdown.Item>
              <NavDropdown.Item href="./mobileservices">Mobile Services  </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="./listofservices">ServicesList</Nav.Link>
          <AddServices/> 
            <a style={{textDecoration:"none"}} href='./login'><button  class="btn   me-2 text-dark d-flex  align-items-center " type="button"> <i class="fa-solid fa-power-off me-2 "></i>User</button></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header