import {useCallback, useState} from "react"; 
import Button from "./Button"; 
import Break from "./Break";
import {Row, Col, Form} from 'react-bootstrap';
import styles from "../styles/Newsletter.module.css"; 
import axios from "axios"; 

function Newsletter(){
    const [email, setEmail] = useState("")
    const [state, setState] = useState("IDLE")
    const [errorMessage, setErrorMessage] = useState(null)
  
    const subscribe = async (e) => {
    e.preventDefault();
      setState("LOADING")
      setErrorMessage(null)
      try {
        const response = await axios.post("/api/newsletter", { email })
        setState("SUCCESS")
      } catch (e) {
        setErrorMessage(e.response.data.error)
        setState("ERROR")
      }
    }
    return(
        <div>
            <Form >
                <Row>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Break text = "Sign up for our newsletter"/>
                        <Form.Group  >
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control className = {styles.email} type="email" placeholder="Enter email"  name = "MERGE0" 
                        value = {email} onChange = {(e) => {setEmail(e.target.value);}}
                        /> 
                        </Form.Group>
                        <div style={{textAlign: "center"}}>
                        <Button disabled={state === "LOADING"} text = "Subscribe" id = "mc-embedded-subscribe" onClick = {subscribe} />
                        </div>
                    </Col>
                </Row>           
            </Form>
            {/* {state === "ERROR" && (<p>{errorMessage} Do it again</p>)}
            {state === "SUCCESS" && (<p>success</p>)} */}
        </div>
    );
}

export default Newsletter; 

