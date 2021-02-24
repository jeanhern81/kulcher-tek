import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../src/pages/Home";
import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Switch>
      <Route exact path ='/' component={Home} />
      <Route path='/home' component={Home} />
    </Switch>
      </BrowserRouter>

    


  </div>

  );
}

export default App;
