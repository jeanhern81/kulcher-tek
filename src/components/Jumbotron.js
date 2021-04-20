import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import KTPicture from '../images/KTPicture.jpg';

import "../index.css"


function Jumbo() {


    return (
<Jumbotron>
    
    <img src={KTPicture} id='jumbo-image' alt='Micophone with podcast name' ></img>
    
    

 


</Jumbotron>

    );
}

export default Jumbo;