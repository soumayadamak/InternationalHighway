import React from "react"; 
import Nav from 'react-bootstrap/Nav';
import "./styles/Button.css"; 
function Button(prop){
    return(<Nav.Link href="#">
    <button  className = "colored-butt">{prop.text}</button>
    </Nav.Link>);
}

export default Button; 