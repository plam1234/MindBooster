import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Books";
import Home from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

// Create Login route, Signup Route, Quiz Route(dash/home)
function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
