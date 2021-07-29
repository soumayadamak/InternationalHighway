import React from "react";

import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Button from './Button';
import "./styles/Header.css";

function Heading() {
    return (
        /* <nav className="navbar navbar-expand-lg navbar-light ">
             <div className="Logo-Container" >
                 <a className="" href="#"><img src="./images/logo.png" alt="" className="logo-img"></img></a>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon" id="Burger"></span>
                 </button>
             </div>
 
             <div className="collapse navbar-collapse" id="navbarNavDropdown">
                 <ul className="navbar-nav">
                     <li className="nav-item active">
                         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                     </li>
                     <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Services              </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                             <a className="dropdown-item" href="/SAT">SAT Prep</a>
                             <a className="dropdown-item" href="/guidance">University Guidance</a>
                         </div>
                     </li>
                     <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             Opportunities              </a>
                         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                             <a className="dropdown-item" href="#">For High School Students</a>
                             <a className="dropdown-item" href="#">For University Students</a>
                         </div>
                     </li>
                 </ul>
                 <Button text="Sign up" />
 
             </div>
         </nav>*/
        <Navbar expand="lg">
            <a href="#"><img src="./images/logo.png" alt="" className="logo-img"></img></a>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <Nav
                    className="mr-auto my-2 my-lg-0 center"
                    style={{ maxHeight: '100px' }}
                >
                    <Nav.Link >Home</Nav.Link>
                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/SAT" >SAT Prep</NavDropdown.Item>
                        <NavDropdown.Item href="/guidance" >University Guidance</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Oportunities" id="navbarScrollingDropdown">
                        <NavDropdown.Item > For High School Students </NavDropdown.Item>
                        <NavDropdown.Item > For University Students</NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Button text="Sign up" />
            </Navbar.Collapse>

        </Navbar>

    );
}
export default Heading;
