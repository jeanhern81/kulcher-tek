import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import applePodcast from '../images/podcastLogo/applePodcast.png';
import spotifyPodcast from '../images/podcastLogo/spotifyPodcast.png';
import stitcherPodcast from '../images/podcastLogo/stitcherPodcast.png';
import Patreon from '../images/podcastLogo/Patreon.png';
import googlePlay from '../images/podcastLogo/googlePlay.png';

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
            <ul>Cryptocurrency</ul>
            <ul>Bots </ul>
            <ul>Smart Homes</ul>
            <ul>Subscription Services</ul>
            <ul>Pandemic Ready</ul>
            <ul> Older Generation and the News  </ul>
            


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
            <p>
                <a href=""><img src={googlePlay} style={{width: 300 }} id='googlePlay' alt='Google Play Logo'></img></a>
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
            </p>

        
        

        
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

