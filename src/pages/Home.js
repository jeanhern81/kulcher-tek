import React, { Component } from "react";

//Pages
import Nav from '../components/Nav';
import Footer from '../components/Footer';
//Style Sheet
import '../index.css';

class Home extends React.Component {
    render() {
    return (
        <div>
            <Nav />
            <div className="homeBody">
        Kulcher Tek Home Page Works
            </div>
            <Footer />
        </div>
    );
    }
}
export default Home;