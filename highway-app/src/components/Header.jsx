import React from "react";

import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from './Button';
import "./styles/Header.css";

function Heading() {
    return (

        <Navbar expand="lg">
            <a href="#"><img src="./images/logo.png" alt="" className="logo-img"></img></a>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Nav
                    className="mr-auto my-2 my-lg-0 center"
                    style={{ maxHeight: '100px' }}
                >
                    <Nav.Link className="Item" >Home</Nav.Link>
                    <NavDropdown  title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/SAT" >SAT Prep</NavDropdown.Item>
                        <NavDropdown.Item href="/guidance" >University Guidance</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Oportunities" id="navbarScrollingDropdown">
                        <NavDropdown.Item > For High School Students </NavDropdown.Item>
                        <NavDropdown.Item > For University Students</NavDropdown.Item>
                    </NavDropdown>
                    <Button text="Sign up" />

                </Nav>
            </Navbar.Collapse>

        </Navbar>

    );
}
export default Heading;
