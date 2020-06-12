import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/index";
import Home from "./pages/Homepage";
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
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/homepage" component={Home} />
                <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
    );
}

export default App;
