import React from "react";
import './styles/Footer.css';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'
export default function Footer() {
    return (
        <Row className="Footer">
            <Row>
                <img src="./images/logo.png" alt="" className="logo-img"></img>
                <div>
                    <h6> Company </h6>
                    <ListGroup variant="flush">
                        <ListGroup.Item> About </ListGroup.Item>
                        <ListGroup.Item> Careers </ListGroup.Item>
                        <ListGroup.Item> Team </ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <h6>Contact Us</h6>
                    <p> <span>&#9993;</span> highway.tunis@gmail.com </p>
                    <p> <span>&#9990;</span> +216 56 161 653 </p>
                </div>
                
            </Row>
        </Row>
    );
}