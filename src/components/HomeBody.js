import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import applePodcast from '../images/podcastLogo/applePodcast.png';
import spotifyPodcast from '../images/podcastLogo/spotifyPodcast.png';
import stitcherPodcast from '../images/podcastLogo/stitcherPodcast.png';
import Patreon from '../images/podcastLogo/Patreon.png';

import TwitterFeed from '../components/TwitterFeed';
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
            

            <Col sm={4}> <h3> </h3>           
            <p>
                <a href=""><img src={applePodcast} style={{width: 300  }} id='applePodcast' alt='Apple Podcast Logo' ></img></a> 
            </p>
            <p>
                <a href=""><img src={spotifyPodcast} style={{width: 300  }} id='spotifyPodcast' alt='Spotify Podcast Logo' ></img></a>
            </p>
            <p>
                <a href=""><img src={stitcherPodcast} style={{width: 300  }} id='stitcherPodcast' alt='Stitcher Podcast Logo' ></img></a>
            </p> 
            </Col>

            
        </Row>

        </div>
    <br />
    <hr />
    <br />

    {/*  Patreon Button Information */}
    <Row>
        <Col>
                <div className='justify-content-center'>
            <p>
                Like what you hear? You can join our Patreon for as little as $3 a month. Thanks for your support!
            </p>
        <a href="https://www.patreon.com/bePatron?u=49976226" data-patreon-widget-type="become-patron-button"><img src={Patreon} style={{ width: 300}} id='patreon' alt='Patreon Logo Button'></img></a>

        </div>
        
        </Col>

        <Col>
        
        <div>
        
        <TwitterFeed />

        <p>
        <a href="https://twitter.com/KulcherTek?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @KulcherTek</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </p>
        
        </div>
        </Col>




    </Row>



<br /> <br /> <br />
</Container>

</div>
        

    

    
            
            
);

    }

};


export default HomeBody;

