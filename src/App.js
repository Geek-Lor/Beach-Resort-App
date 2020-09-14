import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages Import
import { Home, SingleRoom, Rooms, Error } from "./pages/exportFiles";
//Components Import
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:lord' component={SingleRoom} />
          <Route component={Error} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
