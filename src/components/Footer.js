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
                
            
    <Navbar bg="dark" variant="dark"  fixed="sticky" className="justify-content-center">
        <Row>
        <Col >
            <Navbar.Brand id="kT">
                <AiOutlineCopyrightCircle />&nbsp; Kulter Tek Media 2021.&nbsp;
            </Navbar.Brand>
        </Col >

        <Col className="p-1">
            <div className=" socialMediaIcons">
            <a href="https://www.instagram.com/kulchertek/"><SiInstagram /></a> &nbsp;
            <a href="https://www.facebook.com/KulcherTek"><SiFacebook /></a> &nbsp;
            <a href="https://twitter.com/KulcherTek"><FiTwitter /></a> &nbsp;
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