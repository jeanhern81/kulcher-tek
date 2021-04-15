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
        <Container fluid={false}>
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
            <ul>The Internet and Me< /ul>
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
            <iframe title="Kulcher Tek Podcast" allowtransparency="true" 
            style={{ width: 500, }} height="315" width="100%"  scrolling="no" data-name="pb-iframe-player" 
            src="https://www.podbean.com/player-v2/?i=95jv9-a2feda-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=315" allowfullscreen="">
            </iframe></Col>
        </Row>


        </div>
        
        </Container>
    </div>

    
            
            
);

    }

}
export default HomeBody;

