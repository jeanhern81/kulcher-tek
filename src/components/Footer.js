import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

import { ImPodcast } from 'react-icons/im';
import { SiInstagram } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { FiTwitter } from 'react-icons/fi';
import { SiTiktok } from 'react-icons/si';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';


import './NavFooter.css';

class Footer extends Component {

    render() {
        return (
            <div>
                
            
    <Navbar bg="secondary" variant="dark"  fixed="bottom" className="justify-content" >
    <Row>
    <Col>
        <Navbar.Brand href="#home" >
        
                <AiOutlineCopyrightCircle />&nbsp; Kulter Tek Media 2021.
        
        </Navbar.Brand>
    </Col>

    <Col>
        <div className=" socialMediaIcons px-15">
            <SiInstagram /> &nbsp;
            <SiFacebook /> &nbsp;
            <FiTwitter /> &nbsp;
            <SiTiktok /> &nbsp;
            <ImPodcast /> &nbsp;
        </div>
    </Col>




    </Row>
    </Navbar> 
    
            </div>
        );
        }

}


export default Footer;