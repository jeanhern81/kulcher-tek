import React, { Component } from "react";

//Pages
import Nav from '../components/Nav';
import Footer from '../components/Footer';
//Style Sheet
import '../index.css';

class Crew extends React.Component {
    render() {
    return (
        <div>
            <Nav />
            
            <div className="meetTheCrew">
            Meet the Crew!
            </div>

            <Footer />
        </div>
    );
    }
}
export default Crew;