
import Button from "./Button"; 
import Subtitle from "./Subtitle"; 
import styles from "../styles/Section.module.css";
import Para from "./Para"; 
import {Image, Row, Col} from 'react-bootstrap';

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
 
            <TextColumn order = {prop.orderText} subtitle = {prop.subtitle} body = {prop.body}/> 
            <ImageColumn order = {prop.orderImage} src={prop.src}  alt={prop.alt}/> 
      </Row>
    );
}

export default Section; 
export {ImageColumn, TextColumn}; 

