import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Crew from "../src/pages/Crew";
import Listen from "../src/pages/Listen";
import Contact  from '../src/pages/Contact';

import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import Jumbotron from "../src/components/Jumbotron";

import './App.css';


function App() {
  return (
<Router>
    <div className='App'>
      
<Jumbotron />
<Nav />


    <Switch>

      <Route exact path='/'  component={Home} />       
      <Route exact path='/crew' component={Crew} />
      <Route exact path='/listen' component={Listen} />
      <Route exact path='/contact' component={Contact} />
      
      
    </Switch>
<Footer />   

  </div>
</Router>
  );
}

export default App;
