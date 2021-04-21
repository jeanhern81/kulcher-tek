import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImPodcast } from 'react-icons/im';
import { FaPatreon } from 'react-icons/fa';

function NavBarMain() {
    return (
    <div>
        <Navbar className="navbar navbar-expand-sm mb-5" bg="dark" variant="dark" >
        <Link className="navbar-brand hover" to="/">
            <h4>Kulcher Tek</h4>
        </Link> &nbsp; &nbsp;
        <button
            className="navbar-toggler navbar-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <Link className="nav-link active hover" to="/">
                <li><AiFillHome /> Home</li>
                </Link> &nbsp; &nbsp;
                <Link className="nav-link active hover" to="/crew">
                <li><BsFillPeopleFill /> Meet the Crew</li>
                </Link> &nbsp; &nbsp;
                <Link className="nav-link active hover" to="/contact">
                <li><MdEmail /> Contact Us</li>
                </Link> &nbsp; &nbsp; 
                <Nav.Link href="https://kulchertek.podbean.com/" target='_blank'><ImPodcast /> Podcast</Nav.Link>&nbsp; &nbsp;
                <Nav.Link href="https://www.patreon.com/kulchertek?fan_landing=true" target='_blank'><FaPatreon /> Patreon</Nav.Link>
            </ul>
            </div>
            </Navbar>
        </div>
    );
}

export default NavBarMain;