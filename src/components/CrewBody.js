import React from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Card } from "react-bootstrap";

import Me from '../images/Me.png';
import gerson from '../images/gerson.png';
//Style Sheet
import '../index.css';


function CrewBody() {

return (

    

<Container fluid={false} className="py-5">

    <div>
        <h4>The Crew</h4>
        <br />
        <p>
            Take a minute and get to know us! 
        </p>
    </div>
    

<br />


<Card style={{ }} >
<Card.Body >
        <h3 className='text-center'>Gerson</h3> 
        <br />
        <Col xs={6} md={4} ></Col>
        <img src={gerson} style={{ width: 200, float: 'left'}} id='gerson' alt='Gerson Marroquin' ></img>

        <div >
        <Col>   
        <p className='gmTxt'>
        Technology has been a part of me for as long as I can remember.         
        From playing with my cousin's Atari to understanding how a VCR operates and connecting it to multiple components. This would eventually have computers and coding cross my path. From having a Compaq desktop to building my own and playing with MySpace to developing a full blown working web application, technology has been a big part of my life. With all of my experiences, I hope to share some of my knowledge to those who might not be sure if technology is their future or are on the fence of just picking it up for fun. Trust me. It's worth it. With all that said however, my true passion will always be comic books. Specifically Teenage Mutant Ninja Turtles. Let's see how I combine my passion with my love. 
        </p>
        </Col>
            
    </div>
<br />
<hr />
    </Card.Body>

    <Card.Body >
        <h3 className='text-center'>Jeanette</h3> 
        <br /> 
        <Col xs={6} md={4} >
        <img src={Me} style={{width: 200, float:'left' }} id='me' alt='Jeanette Hernandez' ></img>
            
        </Col> 
        

        <div >
        <Col> 
        <p className='jeanetteTxt'>
        I have love/hate mostly love relationship with technology.  It’s crazy to think how much we depend on it and how ingrained it is in our daily lives. My curiosity with coding began when I got my first computer in the late 90s. I started off by learning a bit HTML and making websites for fun. Around that time, I developed passion for cultural anthropology and began studying that in college. Later receiving a Bachelors of Anthropology from the University of North Texas. My goal with Kulcher Tek is marry the two constants in my life, culture and technology. Thanks for coming along on this journey with us.  
        </p>
        </Col>
    </div>
<br />
<hr />

</Card.Body>


    <Card.Body >
        <h3 className='text-center'>Charlene</h3>   
        <Col xs={6} md={4} ></Col>
        

        <div className='charleneTxt'>
        <Col> 
        <p > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
        </Col>
    

        
    </div>

    </Card.Body>



</Card>

<br />
</Container>




            
);
}
export default CrewBody;