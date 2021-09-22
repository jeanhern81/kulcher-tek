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
import { FaEnvelope } from 'react-icons/fa';

import './Footer.css';


class Footer extends Component {

    render() {
        return (
            <Container fluid={true}>
                
             <hr />
            <Navbar bg="clear"  bottom='fixed' className="justify-content-center footer p-0">
                <Row>
                <Col >
                    <Navbar.Brand id="kT"> 
                   
                        <AiOutlineCopyrightCircle /> Kulter Tek Media 2021.
                    </Navbar.Brand>
                </Col >
        
                <Col>
                    <div >
                    <a href="https://www.instagram.com/kulchertek/"><SiInstagram /></a> &nbsp;
                    <a href="https://www.facebook.com/KulcherTek" ><SiFacebook /></a> &nbsp;
                    <a href="https://twitter.com/KulcherTek" ><FiTwitter /></a> &nbsp;
                    <a href="/"><SiTiktok /></a> &nbsp;
                    <a href="https://kulchertek.podbean.com/" ><ImPodcast /></a> &nbsp;
                    <a href="mailto:kulchertek@google.com"><FaEnvelope /></a> 
                    </div>
                </Col>
        
                </Row>
            </Navbar> 
        
            
            </Container>

        
        );
        }

}


export default Footer;