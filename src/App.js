import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import Crew from "../src/pages/Crew";
import './App.css';

function App() {
  return (

    <div className='App'>
      
<BrowserRouter basename={process.env.PUBLIC_URL, process.env.SRC_URL}>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route exact path='/crew' component={Crew } />
    </Switch>
</BrowserRouter>    

    


  </div>

  );
}

export default App;
