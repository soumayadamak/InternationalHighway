//ourdomain.com/
//you can omit the import react from 'react' statement for next js
import {Container} from "react-bootstrap";
import Section from "../components/Section";
import Newsletter from "../components/Newsletter";
import Break from "../components/Break"




function homePage(){

    return  (
        <>
        <section>
             <Container  >
                 <Section orderText = {1} subtitle = "Achieve Your Educational Dreams" body = "Some text here about highway. Some text here Some text here about highway. Some text here about highway.about highway." orderImage = {2} src = "images/img1.png" alt = "image of students working for their future"/>
                 {/* <Break text = "Our Services"/> */}
            </Container>
        </section>
        {/* <div>
            <Newsletter />
        </div> */}
    </>
    );
}

export default homePage;
