import React from "react"; 
import Button from "./Button"; 
import Subtitle from "./Subtitle"; 
import "./styles/Section.css"; 
import Para from "./Para"; 
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

function  textColumn(prop){
    return(
        <Col xs = {{span : 12, oder : prop.order}} md = {{span : 6, order : prop.order}}>
            <Subtitle text = {prop.subtitle}/>
            <Para text = {prop.body}/> 
            <a href="#"> <Button text = 'Sign up'/> </a>
            <a href="#"> <Button text = 'Sign up'/> </a>
        </Col>
    );
}
function imageColumn(prop){
    return (
    <Col xs = {{span : 12, order : prop.order}} md = {{span : 6, order : prop.order}} >
        <Image src={prop.src}  alt={prop.alt} fluid/>
    </Col>
    );
}
function row(prop){
    return(
        <Row className="row1">
            <textColumn order = {prop.order} subtitle = {prop.Subtitle} body = {prop.body}/> 
            <imageColumn order = {prop.order} src={prop.src}  alt={prop.alt}/>
      </Row>
    );
}

// export here then fix break part 

