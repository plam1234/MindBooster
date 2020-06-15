import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../../pages/Login";
import Signup from "../../pages/Signup";
import NoMatch from "../../pages/NoMatch";
import Nav from "../Nav";

function UnauthenticatedApp() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/quiz" component={Login} />

        <Switch></Switch>
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default UnauthenticatedApp;
