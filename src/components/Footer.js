import React from "react";
import {Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../imgs/logo.png";

function Footer(){
    return(
        <footer expand="lg" style={{backgroundColor:'#d7f2f5' , boxShadow:'-2px -2px #1047733b'}} className="p-4">
        <Container fluid>
            <div className="row">
                <NavLink to="/home" className="col-3"><img src={logo} alt="logo" style={{width:160}}/>  </NavLink>
                <div className="col-6 mt-5" style={{textAlign:'center'}}>
                    <h4> All rights reserved , MedClinic ITI &copy; 2022 </h4>
                </div>
                <div className="col-3 mt-5" style={{textAlign:'center'}}>
                    <i className="fa-brands fa-facebook-square fa-2xl"></i>
                    <i className="fa-brands fa-twitter-square fa-2xl"></i>
                    <i className="fa-brands fa-instagram-square fa-2xl"></i>
                </div>
            </div>
        </Container>
    </footer>
    )
}

export default Footer;