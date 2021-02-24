import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

class NavBarMain extends Component {

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Kulcher Tek</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="https://kulchertek.podbean.com/" target='_blank'>Podcast</Nav.Link>
        <Nav.Link href="https://www.patreon.com/kulchertek?fan_landing=true" target='_blank'>Patreon</Nav.Link>

        <NavDropdown title="Shop Merch" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Clothing</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Misc</NavDropdown.Item>

    </NavDropdown>  

    </Nav>
    <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar>


    
    
            </div>
        );
        }

}


export default NavBarMain;