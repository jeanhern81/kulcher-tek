import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImPodcast } from 'react-icons/im';
import { FaPatreon } from 'react-icons/fa';


class NavBarMain extends Component {

    render() {
        return (
            <div>
    
    <Router>
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="/">Kulcher Tek Podcast</Navbar.Brand>&nbsp; &nbsp;
    <Nav className="mr-auto">

        <Nav.Link href="/"><AiFillHome /> Home</Nav.Link>&nbsp; &nbsp;
        <Nav.Link href="/crew"><BsFillPeopleFill /> Meet the Crew</Nav.Link>&nbsp; &nbsp;
        <Nav.Link href='/contact'><MdEmail /> Contact Us</Nav.Link>&nbsp; &nbsp;
    
            {/* external liks */}
        <Nav.Link href="https://kulchertek.podbean.com/" target='_blank'><ImPodcast /> Podcast</Nav.Link>&nbsp; &nbsp;
        <Nav.Link href="https://www.patreon.com/kulchertek?fan_landing=true" target='_blank'><FaPatreon /> Patreon</Nav.Link>

        {/* 
        <NavDropdown title="Shop Merch" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Misc</NavDropdown.Item>
        </NavDropdown>  
    */} 
    </Nav>
    {/*  Search Box
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
    </Form>
    */}
    </Navbar>
    </Router>

    
    
            </div>
        );
        }

}


export default NavBarMain;