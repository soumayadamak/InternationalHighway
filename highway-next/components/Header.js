import {Navbar, NavDropdown,Nav} from "react-bootstrap";
import Link from 'next/link';
import Button from "./Button";
import styles from "../styles/Header.module.css";

function Heading() {
    return (

        <Navbar expand="lg">
        <a href="#"><img src="/images/logo.png" alt="" className="logo-img"></img></a>
        <Navbar.Toggle />
        <Navbar.Collapse >
            <Nav
                className="mr-auto my-2 my-lg-0 center"
                style={{ maxHeight: '100px' }}
            >
                <Link href = "/">
                <Nav.Link className="Item" >Home</Nav.Link>
                </Link>
                <NavDropdown  title="Services" id="navbarScrollingDropdown">
  
                    <Link href = "/sat"><NavDropdown.Item >SAT Prep</NavDropdown.Item></Link>
                    <Link href = "/guidance"><NavDropdown.Item >University Guidance</NavDropdown.Item></Link>
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