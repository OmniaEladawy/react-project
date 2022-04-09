import React from "react";
import logo from "../imgs/logo.png";
import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";


function Header(props){

  const {cartItems , countItems} = props;

  return(
    <Navbar expand="lg" style={{backgroundColor:'#d7f2f5' , boxShadow:'2px 2px #1047733b'}}>
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="logo" style={{width:160}}/>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: '100px'}} >
              <NavLink to="/home" className="fw-bold fs-5 hLink">Home</NavLink>
              <NavDropdown title="Products" id="basic-nav-dropdown" className="fw-bold fs-5 hLink">
                <NavLink to="/allproducts" className="d-block p-2 dropItem" style={{color:'#104773'}}>All Products</NavLink>
                <NavLink to="/respiratory" className="d-block p-2 dropItem" style={{color:'#104773'}}>Respiratory</NavLink>
                <NavLink to="/anesthesia" className="d-block p-2 dropItem" style={{color:'#104773'}}>Anesthesia</NavLink>
                <NavLink to="/catheter" className="d-block p-2 dropItem" style={{color:'#104773'}}>Catheter</NavLink>
                <NavLink to="/nonwoven" className="d-block p-2 dropItem" style={{color:'#104773'}}>Non-Woven</NavLink>
                <NavLink to="/accessory" className="d-block p-2 dropItem" style={{color:'#104773'}}>Accessory</NavLink>
                <NavLink to="/others" className="d-block p-2 dropItem" style={{color:'#104773'}}>Others</NavLink>
              </NavDropdown>
              <NavLink to="/contact" className="fw-bold fs-5 hLink">Contact Us</NavLink>
          </Nav>
          <Nav
            className="me-2">
              <div id="navbar-search-autocomplete" className="form-outline">
                <input type="search" id="form1" className="form-control" placeholder="Search" style={{width: '330px'}}/>
              </div>
              <button type="button" className="btn" style={{width: '10px' , height: '37px' , marginLeft: '-10px'}} id="btnSearch" >
                <i className="fas fa-search" style={{position: 'absolute' , top: '65px' , right: '285px'}}></i>
              </button>
            <NavLink to="/cart" className="fw-bold fs-5 mx-5"><i className="fa-solid fa-cart-shopping fa-lg"></i><div style={{width:'30px',height:'30px',backgroundColor: '#104773', position: 'absolute', borderRadius: '50%', top: '27px', right: '180px' , color:'#fff'}}>
              {cartItems.length === 0 ? <span style={{position: 'absolute', top: '1px', right: '9px' , fontSize: '16px'}}>0</span> : <span style={{position: 'absolute', top: '1px', right: '9px' , fontSize: '16px'}}>{countItems}</span>}            
              </div></NavLink>
            <NavLink to="/login" className="fw-bold fs-5"><i className="fa-solid fa-user fa-lg"></i> <span className="fw-bold fs-5 hLink"> Sign In </span></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;