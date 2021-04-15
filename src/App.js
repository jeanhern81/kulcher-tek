import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Crew from "../src/pages/Crew";
import './App.css';

function App() {
  return (
    <Router>
    <div className='App'>
      
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path='/crew' component={Crew } />
    </Switch>
    

    


  </div>
</Router>
  );
}

export default App;
