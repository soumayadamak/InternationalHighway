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
                        <Form.Control id = "email" type="email" placeholder="Enter email"  name = "MERGE0" 
                        value = {email} onChange = {(e) => {setEmail(e.target.value);}}
                        /> 
                        </Form.Group>
                        <div style={{textAlign: "center"}}>
                        <Button disabled={state === "LOADING"} text = "Subscribe" id = "mc-embedded-subscribe" onClick = {subscribe} />
                        </div>
                    </Col>
                </Row>           
            </Form>
            {state === "ERROR" && (<p>{errorMessage}</p>)}
            {state === "SUCCESS" && (<p>success</p>)}

        </div>
    );
}

export default Newsletter; 

// name = "letter" action="https://gmail.us7.list-manage.com/subscribe/post-json?c=?" method="POST" target="hiddenFrame" noValidate
/* <div class="break"> <span class = "subheading">Sign up for our newsletter</span>
  <hr>
</div>
  <div class = "row5" >
    <form class= "form-group newsletter" id = "#newsletter">
        <input class = "form-control " id =  "email" type="email"  aria-describedby="emailHelp" placeholder="Your email">
        <a href="#"><button  class = "colored-butt">Subscribe </button></a>
    </form>
  </div> */

//   <!-- Begin Mailchimp Signup Form -->

// <div id="mc_embed_signup">
// <form action="https://gmail.us7.list-manage.com/subscribe/post?u=199a0e6da31cf6eef4bb76906&amp;id=bb564e7f6a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<h2>Subscribe</h2>
// <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
// <div class="mc-field-group">
// 	<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
// </label>
// 	<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
// </div>
// 	<div id="mce-responses" class="clear">
// 		<div class="response" id="mce-error-response" style="display:none"></div>
// 		<div class="response" id="mce-success-response" style="display:none"></div>
// 	</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_199a0e6da31cf6eef4bb76906_bb564e7f6a" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>
// <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
// <!--End mc_embed_signup--></div>


// action="https://gmail.us7.list-manage.com/subscribe/post-json?c=?" method="POST" target="hiddenFrame" noValidate
// value = {emailValue}  onChange={ (e)=>{setEmail(e.target.value);}
// onClick = {() => {setEmail('');}}
