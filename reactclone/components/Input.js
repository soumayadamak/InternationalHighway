import {Form, Col, Row, Container} from 'react-bootstrap';
import React from 'react';
// import "./styles/satStyle.css"; // after watching the next video, fix the styling 


export default function Input(prop){

    return (
        <Row className="mb-3">
            <Col>
                <Form.Group  controlId= {prop.controlId}>
                    <Form.Control type={prop.type} placeholder={prop.placeholder}/>
                </Form.Group>
            </Col>
        </Row>

    );


}


