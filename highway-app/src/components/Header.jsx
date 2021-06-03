import React from "react"; 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from './Button';
import "./styles/Header.css"; 

function Heading(){
    return(
        <Navbar id = "Navbar"  >
            <div className = "logo-img">
            <Navbar.Brand  href = "#" >
                    <img  src="./images/logo.png"  alt="Highway Logo" />
                </Navbar.Brand>
            </div>

            <Nav id = "navbar-nav" >
                <div><Nav.Link href="#">Home</Nav.Link></div>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/SAT">SAT Prep</NavDropdown.Item>
                    <NavDropdown.Item href="/guidance">University Guidance</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Opportunities" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#">For High School Students</NavDropdown.Item>
                    <NavDropdown.Item href="#">For University Students</NavDropdown.Item>
                </NavDropdown>
                <Button text = "Sign up" />
            </Nav> 
        </Navbar>);
}
export default Heading;
        