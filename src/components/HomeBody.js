import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



//Style Sheet
import '../index.css';


class HomeBody extends React.Component {
render () {
    return (

    <div>
    

        <Container fluid={false} className="py-1">
        <p class="bodyText">
            <h1>Welcome!</h1>
                <p>Kulcher Tek Podcast where we talk about how techonology, pop culture, and everything in-between.</p>
        </p>
    <br />
    <hr />
    <br />
    <div> 
        <Row>
            <Col sm={6}>
        <h3>Upcoming Show Topics:</h3>
            <ul>The Internet and Me</ul>
            <ul>TikTok and the Over 60 Crowd </ul>
            <ul>Crypto Currency say what? </ul>
            <ul>TBD </ul>
            <ul>TBD </ul>
            <ul>TBD </ul>


            </Col>
            
            <div class='vl'></div>
            <br /> 

            <Col sm={4}>            
            <br />

            <iframe title="Test Audio" allowtransparency="true" height="150" width='auto' 
            scrolling="no" data-name="pb-iframe-player" 
            src="https://www.podbean.com/player-v2/?i=keqnf-10141c6-pb&from=embed&square=1&share=1&download=1&skin=1&btn-skin=7&size=300" allowfullscreen=""></iframe>
            </Col>
        </Row>

        </div>

</Container>

</div>
        

    

    
            
            
);

    }

};


export default HomeBody;

