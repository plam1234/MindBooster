import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NoMatch from "../../pages/NoMatch";
import Nav from "../Nav";
import Home from "../../pages/Homepage";
import Quiz from "../../pages/Quiz";
import Footer from "../Nav/Footer";
function AuthenticatedApp() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Home} />
                <Route exact path="/quiz" component={Quiz} />

                <Switch></Switch>
                <Route path="*" component={NoMatch} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default AuthenticatedApp;
