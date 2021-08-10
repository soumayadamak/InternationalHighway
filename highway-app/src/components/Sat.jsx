import React from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from './Button';
import Container from 'react-bootstrap/Container'
import "./styles/satStyle.css"

function Sat (props) {
   
      return (
          <div>
        <Form>
        <Container>    
  <Row className="mb-3">
      <col>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Control type="name" placeholder="Your Name" />
    </Form.Group>
    </col>
    </Row>
    <Row className="mb-3">
    <col>
   <Form.Group as={Col} controlId="formGridHighSchool">
      <Form.Control type="high school" placeholder="Your High School" />
    </Form.Group>
    </col>
    </Row>
    </Container>   
    <Container>   
    <Row className="mb-3">
    <col>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control type="email" placeholder="Your Email" />
    </Form.Group>
    </col>
    </Row>
    <Row className="mb-3">
    <col>
  <Form.Group as={Col} controlId="formGridGrade">
      <Form.Select defaultValue="Your Grade">
        <option>1ère</option>
        <option>2ème</option>
        <option>3ème</option>
        <option>Bac</option>
        <option>Other</option>
      </Form.Select>
    </Form.Group>
    </col>
    </Row>
    </Container>   
    <Container>   
    <Row className="mb-3">
    <col>
    <Form.Group as={Col} controlId="formGridPhoneNumber">
      <Form.Control type="phone number" placeholder="Your Phone Number " />
    </Form.Group>
   </col>
   </Row>
   <Row className="mb-3">
    <col>
    <Form.Group as={Col} controlId="formGridYouHeardOfUsThrough">
      <Form.Select defaultValue="You Heard Of Us Through">
        <option>Facebook </option>
        <option>Instagram</option>
        <option>Club</option>
        <option>Highway Ambassador</option>
        <option>Friend</option>
      </Form.Select>
    </Form.Group>
    </col>
    </Row>
    </Container>   
    <Container>   
    <Row className="mb-3">
    <col>
  <Form.Group className="mb-3" controlId="formGridFacbookProfileLink">
    <Form.Control placeholder="Your Facbook Profile Link" />
  </Form.Group>
  </col>
  </Row>
  <Row className="mb-3">
    <col>
  <Form.Group className="mb-3" controlId="formGridCodeFromAPartnerClubOrAmbassador">
    <Form.Control placeholder="Your Code From a Partner Club or Ambassador" />
  </Form.Group>
</col>
</Row>
</Container>   
  <Button text="Sign up" />
</Form>
</div>
      );
    }
  

export default Sat;