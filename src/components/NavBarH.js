import React, { Component } from 'react';
import {
    BrowserRouter as Router, Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';




class NavBarH extends Component {

    render() {
        return (
            <div>
    
    <Router>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Kulcher Tek Podcast</Navbar.Brand>
    <Nav className="mr-auto">
        <ul className='navbar-nav ml-auto'>
        <Link className='nav-link' to="/" ><li>Home</li></Link>
        <Link className='nav-link' to="/crew"><li>Meet the Crew</li></Link>
    
            {/* external links */}
        <Nav.Link  href="https://kulchertek.podbean.com/" target='_blank'>Podcast</Nav.Link>
        
        </ul>
        {/* 
        <NavDropdown title="Shop Merch" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Misc</NavDropdown.Item>

    </NavDropdown>  
    */} 
    </Nav>
    
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
    </Form>
    
    </Navbar>

    </Router>

    
    
            </div>
        );
        }

}


export default NavBarH;