import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import { ImPodcast } from 'react-icons/im';


class Footer extends Component {

    render() {
        return (
            <div>
                
            
                <Navbar bg="dark" variant="dark"  fixed="bottom">
        <Navbar.Brand href="#home">
        <ImPodcast /> &nbsp;
                React Bootstrap
        </Navbar.Brand>
                </Navbar> 


            
    
            </div>
        );
        }

}


export default Footer;