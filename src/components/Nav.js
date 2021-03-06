import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import KTFont from '../images/KTFont.png'

import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImPodcast } from 'react-icons/im';
import { FaPatreon } from 'react-icons/fa';

function NavBarMain() {
    return (
    <div> 

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">


        <Link className="navbar-brand hover" to="/">
        <img src={KTFont} style={{width: 200}} id='KTLogo' alt='KT Logo' ></img>
        </Link> &nbsp; 

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">

        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link className="nav-link active hover" to="/">
                <li><AiFillHome /> Home</li>
                </Link> &nbsp; 
                <Link className="nav-link active hover" to="/crew">
                <li><BsFillPeopleFill /> Meet the Crew</li>
                </Link> &nbsp; 
                <Link className='nav-link active hover' to='/listen'>
                <li><ImPodcast /> Listen</li>
                </Link> &nbsp; 
                <Link className="nav-link active hover" to="/contact">
                <li><MdEmail /> Contact Us</li>
                </Link> &nbsp; 
                
                
                <Nav.Link className='nav-link active hover' href="https://www.patreon.com/kulchertek?fan_landing=true" target='_blank'><FaPatreon /> Patreon</Nav.Link>
            </ul>
            </div>
            </Nav>
            </Navbar.Collapse>
</Navbar>
        </div>
    );
}

export default NavBarMain;