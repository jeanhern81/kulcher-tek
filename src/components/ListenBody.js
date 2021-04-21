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
            <h1>Give us a listen</h1>
                
        </p>
        <br />


    <iframe title="Kulcher Tek Podcast" allowtransparency="true" height="480" width="100%"  scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=95jv9-a2feda-pbblog-playlist&share=1&download=1&rtl=0&fonts=Arial&skin=1&order=episodic&limit=10&filter=all&ss=a713390a017602015775e868a2cf26b0&btn-skin=7&size=480" allowfullscreen=""></iframe>


    <br />
            


        </Container>

</div>
        

    

    
            
            
);

    }

};


export default HomeBody;