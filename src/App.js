import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Crew from "../src/pages/Crew";
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';

import './App.css';

function App() {
  return (

    <div className='App'>
      
<BrowserRouter basename={process.env.SRC_URL }>

<Nav />
    <Switch>
      
      <Route exact path='/' component={Home} /> 
      
      <Route exact path='/crew' component={Crew} />
      

      
    </Switch>
<Footer />   

</BrowserRouter>    

    


  </div>

  );
}

export default App;
