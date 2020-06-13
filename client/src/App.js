import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/index";
import home from "./pages/Homepage";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Quiz from "./pages/Quiz";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

// Create Login route, Signup Route, Quiz Route(dash/home)
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/quiz" component={Quiz} />
          <Route exact path="/homepage" component={home} />
          <Switch>
            <PrivateRoute exact path="/homepage" component={home} />
          </Switch>
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
