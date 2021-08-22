import React, {useCallback, useState} from "react"; 
import Button from "./Button"; 
import Break from "./Break";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form';
import "./styles/Newsletter.css";
import axios from "axios"; 

function Newsletter(){

    const [emailValue, setEmail] = useState(''); 
    const [url, setUrl] = useState(false); 
    const [method, setMethod] = useState(false); 
    const [target, setTarget] = useState(false); 

    const submitForm = useCallback((e)=>{
        e.preventDefault();
        console.log(emailValue);
        axios.
            post(`/bb564e7f6a/members`, {EMAIL : emailValue},{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            })
            // {
            //     {'Authorization': `Basic `}})
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        setEmail('');
    

                // {headers: {
                // "x-apikey": "b60101b7cc0597ca916b6f630116d52f-us7",
                // "Access-Control-Allow-Origin": "*",
                // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'}}
                // responseType: 'json'
            
    
        // setUrl("https://gmail.us7.list-manage.com/subscribe/post-json?c=?");
        // setMethod("POST");
        // setTarget("hiddenFrame");
      
        // const url = 'https://us7.api.mailchimp.com/3.0/lists/bb564e7f6a/members?skip_merge_validation=<SOME_BOOLEAN_VALUE>'
        // const url = 'https://gmail.us7.list-manage.com/subscribe/post';
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ emailValue})
        // };
        // fetch(url, requestOptions)
        //     .then(response => console.log(response))
        //     .catch(error => console.log('Form submit error', error));
        // Form.action = "https://gmail.us7.list-manage.com/subscribe/post-json?c=?";
        // Form.method = "POST";
        // Form.target = "hiddenFrame";

        // ;
    });
    return(
        <div>
            <Form 
            onSubmit = {submitForm} 
            >
            <input type="hidden" name="u" value="199a0e6da31cf6eef4bb76906"/>
             <input type="hidden" name="id" value="bb564e7f6a"/>
                <Row>
                    <Col  md={{ span: 6, offset: 3 }}>
                        <Break text = "Sign up for our newsletter"/>
                        <Form.Group  >
                        {/* <Form.Label>Email</Form.Label> */}
                        <Form.Control id = "email" type="email" placeholder="Enter email"  name = "MERGE0" 
                        value = {emailValue} onChange = {(e) => {setEmail(e.target.value);}}
                        /> 
                        </Form.Group>
                        <div style={{textAlign: "center"}}>
                        <Button text = "Subscribe" id = "mc-embedded-subscribe"/>
                        </div>
                    </Col>
                </Row>           
            </Form>
            <iframe name="hiddenFrame" src="about:blank" style = {{display : "none"}}/>
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
