import React, { Component } from 'react';
import {
    BrowserRouter as Router, 
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';





class NavBarMain extends Component {

    render() {
        return (
            <div>
    
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/kulcher-tek">Kulcher Tek Podcast</Navbar.Brand>
    <Nav className="mr-auto">

        <Nav.Link href="/kulcher-tek">Home</Nav.Link>
        <Nav.Link href="/crew">Meet the Crew</Nav.Link>
    
            {/* external liks */}
        <Nav.Link href="https://kulchertek.podbean.com/" target='_blank'>Podcast</Nav.Link>
        <Nav.Link href="https://www.patreon.com/kulchertek?fan_landing=true" target='_blank'>Patreon</Nav.Link>

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