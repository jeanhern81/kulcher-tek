import React, { Component } from "react";

//Pages
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CrewBody from "../components/CrewBody";
//Style Sheet
import '../index.css';

class Crew extends React.Component {
    render() {
    return (
        <div>
            <Nav />
            
            <CrewBody />

            <Footer />
        </div>
    );
    }
}
export default Crew;