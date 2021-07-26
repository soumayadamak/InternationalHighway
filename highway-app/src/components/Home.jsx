import React from "react"; 
import Section,{ImageColumn, TextColumn} from './Section';
import Break from './Break';
import Container from 'react-bootstrap/Container'; 
import "./styles/style.css";


export default function Home(){
    return(
    <section>
        <Container  style = {{ marginTop:'-15%',paddingTop: '10%'}}>
            {/* not working!! -- need to have Ali fix it */}
            <Section orderText = {1} subtitle = "Achieve Your Educational Dreams" body = "Some text here about highway. Some text here Some text here about highway. Some text here about highway.about highway." orderImage = {2} src = "images/img1.png" alt = "image of students working for their future"/>
            <Break text = "Our Services"/>
        </Container>
    </section>
    );
}
