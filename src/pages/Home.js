import React, { Component } from "react";

//Pages
import NavBarH from '../components/NavBarH';
import Footer from '../components/Footer';
import HomeBody from "../components/HomeBody";

//Style Sheet
import '../index.css';

class Home extends React.Component {
    render() {
    return (
        <div>
            <NavBarH />
            
            <HomeBody />

            <Footer />
        </div>
    );
    }
}
export default Home;