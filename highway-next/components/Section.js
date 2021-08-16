
import React from "react"; 
import Button from "./Button"; 
import Subtitle from "./Subtitle"; 
import "./styles/Section.css"; 
import Para from "./Para"; 
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 

function  TextColumn(prop){
    return(
        <Col xs = {{span : 12, oder : prop.order}} md = {{span : 6, order : prop.order}}>
            <Subtitle text = {prop.subtitle}/>
            <Para text = {prop.body}/> 
            <a href="#"> <Button text = 'Sign up'/> </a>
            <a href="#"> <Button text = 'Sign up'/> </a>
        </Col>
    );
}
function ImageColumn(prop){
    return (
    <Col xs = {{span : 12, order : prop.order}} md = {{span : 6, order : prop.order}} >
        <Image src={prop.src}  alt={prop.alt} fluid/>
    </Col>
    );
}
function Section(prop){
    return(
        <Row >
            <textColumn order = {prop.orderText} subtitle = {prop.ubtitle} body = {prop.body}/> 
            <imageColumn order = {prop.orderImage} src={prop.src}  alt={prop.alt}/>
      </Row>
    );
}

export default Section; 
export {ImageColumn, TextColumn}; 

