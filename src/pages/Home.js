import React, { Component } from "react";

//Pages
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import HomeBody from "../components/HomeBody";

//Style Sheet
import '../index.css';

class Home extends React.Component {
    render() {
    return (
        <div>
            <Nav />
            
            <HomeBody />

            <Footer />
        </div>
    );
    }
}
export default Home;