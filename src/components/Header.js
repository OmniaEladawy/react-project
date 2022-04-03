import React from "react";
import logo from "../imgs/logo.png";
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";


function Header(){
  return(
    <Navbar expand="lg" style={{backgroundColor:'#c1e3ff' , boxShadow:'2px 2px #1047733b'}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" style={{width:160}}/>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: '100px'}} >
              <NavLink to="/home" className="fw-bold fs-5 hLink">Home</NavLink>
              <NavDropdown title="Products" id="basic-nav-dropdown" className="fw-bold fs-5 hLink">
                <NavDropdown.Item href="#action/3.1" id="dropItem">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="dropItem">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="dropItem">Something</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" id="dropItem">Separated link</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/profile" className="fw-bold fs-5 hLink">Contact Us</NavLink>
          </Nav>
          <Nav
            className="me-2">
            <NavLink to="/login" className="fw-bold fs-5 mx-5"><i className="fa-solid fa-cart-shopping fa-lg"></i></NavLink>
            <NavLink to="/login" className="fw-bold fs-5"><i className="fa-solid fa-user fa-lg"></i> <span className="fw-bold fs-5 hLink"> Sign In </span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;