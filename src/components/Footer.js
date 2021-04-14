import React, { Component } from 'react';

import Container from "react-bootstrap/Container";
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
    <Container fluid={true}>
                
            
    <Navbar bg="secondary" variant="dark"  fixed="bottom" className="justify-content-center">
        <Row>
        <Col >
            <Navbar.Brand id="kT">
                <AiOutlineCopyrightCircle /><a href="#home">&nbsp; Kulter Tek Media 2021.&nbsp;</a>
            </Navbar.Brand>
        </Col >

        <Col className="p-1">
            <div className=" socialMediaIcons">
            <a href="https://www.instagram.com/kulchertek/"><SiInstagram /></a> &nbsp;
            <a href="https://www.facebook.com/KulcherTek"><SiFacebook /></a> &nbsp;
            <FiTwitter /> &nbsp;
            <SiTiktok /> &nbsp;
            <a href="https://kulchertek.podbean.com/"><ImPodcast /></a> &nbsp;
        </div>
        </Col>

        </Row>
    </Navbar> 
    
    </Container>
        );
        }

}


export default Footer;