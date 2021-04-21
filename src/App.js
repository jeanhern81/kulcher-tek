import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Crew from "../src/pages/Crew";
import Contact from '../src/pages/Contact';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Jumbotron from "../src/components/Jumbotron";

import './App.css';


function App() {
  return (

    <div className='App'>
      
<Jumbotron />
<Nav />

<Router>
    <Switch>

      <Route  path='/' exact component={Home} />       
      <Route path='/crew' exact component={Crew} />
      <Route path='/contact' exact component={Contact} />
      
      
    </Switch>
</Router>

<Footer />   



  </div>

  );
}

export default App;
